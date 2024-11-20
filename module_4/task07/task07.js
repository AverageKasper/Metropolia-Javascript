'use strict';



let map = L.map('map').setView([60.224291, 24.75744], 13);
const routing_form = document.getElementById('routing');
const api_key = '1899bb5e01c4446c8933dd0f732f06c5'
const time_para = document.getElementById('time');


let start;
let lines;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let goal = L.marker([60.22414686845499, 24.75844592816039]).addTo(map);
goal.bindPopup('<b>Metropolia Karamalmi</b>').openPopup();

// Function to decode polyline
function decodePolyline(encoded) {
    let points = [];
    let index = 0, len = encoded.length;
    let lat = 0, lng = 0;

    while (index < len) {
        let b, shift = 0, result = 0;

        // Decode latitude
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        let deltaLat = (result & 1) ? ~(result >> 1) : (result >> 1);
        lat += deltaLat;

        // Decode longitude
        shift = 0;
        result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        let deltaLng = (result & 1) ? ~(result >> 1) : (result >> 1);
        lng += deltaLng;

        points.push([lat / 1e5, lng / 1e5]);
    }

    return points;
}

// Event listener for the form, which is used to submit the location
routing_form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    time_para.innerText = 'Loading...';
    if (start !== undefined) {
        map.removeLayer(start);
    }
    if (lines !== undefined) {
        map.eachLayer((layer) => {
            if (layer instanceof L.Polyline) {
                map.removeLayer(layer);
            }
        });
    }
    let current_time = new Date;
    console.log(current_time);
    let hours = current_time.getHours();
    let minutes = current_time.getMinutes();
    let seconds = current_time.getSeconds();
    const address = document.getElementById('location').value;
    const openstreet = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
    const address_json = await openstreet.json();
    const latitude = address_json[0].lat;
    const longitude = address_json[0].lon;
    start = L.marker([latitude, longitude]).addTo(map);
    start.bindPopup('<b>Selected location</b>').openPopup();
    map.addLayer(start);

    // Query for the route
    const query = `
    {
      plan(
        from: {lat: ${latitude}, lon: ${longitude}}
        to: {lat: 60.22414686845499, lon: 24.75844592816039}
        date: "${current_time.getFullYear()}-${current_time.getMonth() + 1}-${current_time.getDate()}"
        time: "${hours}:${minutes}:${seconds}"
        numItineraries: 3
        
      ) {
        itineraries {
          legs {
            startTime
            endTime
            mode
            duration
            realTime
            distance
            transitLeg
            legGeometry {
                length
                points
            }
          }
        }
      }
    }`;

    const response = await fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'digitransit-subscription-key': api_key
        },
        body: JSON.stringify({ query })
    });

    const google_encoded = await response.json();
    if (google_encoded.data.plan.itineraries.length === 0) {
        time_para.innerText = 'No routes found';    
        return;
    }
    const google_legs = google_encoded.data.plan.itineraries[0].legs;
    
    console.log(google_legs);
    for (let i = 0; i < google_legs.length; i++) {
        let color = '';
        if (google_legs[i].mode === 'WALK') {
            color = 'green';
        } else if (google_legs[i].mode === 'BUS') {
            color = 'purple';
        } else if (google_legs[i].mode === 'TRAM') {
            color = 'red';
        } else if (google_legs[i].mode === 'RAIL') {
            color = 'blue';
        } else {
            color = 'black';
        }
        const route_points = decodePolyline(google_legs[i].legGeometry.points);
        lines = L.polyline(route_points, { color: color });
        lines.addTo(map);
    }

    // Time calculation
    const start_time = google_legs[0].startTime;
    const start_time_format = new Date(start_time);
    const start_time_hours = start_time_format.getHours();
    const start_time_minutes = start_time_format.getMinutes();
    const end_time = google_legs[google_legs.length - 1].endTime;
    const end_time_format = new Date(end_time);
    const end_time_hours = end_time_format.getHours();
    const end_time_minutes = end_time_format.getMinutes();
    const time_difference = end_time_format - start_time_format;
    const dif_hours = Math.floor(time_difference / 1000 / 60 / 60);
    const dif_minutes = Math.floor(time_difference / 1000 / 60) - (dif_hours * 60);
    // Displaying the time
    if (dif_hours > 0) {
        time_para.innerHTML = `Start time: ${start_time_hours}:${start_time_minutes} <br> End time: ${end_time_hours}:${end_time_minutes} <br> Duration: ${dif_hours} hours and ${dif_minutes} minutes`;
    } else {
    time_para.innerHTML = `Start time: ${start_time_hours}:${start_time_minutes} <br> End time: ${end_time_hours}:${end_time_minutes} <br> Duration: ${dif_minutes} minutes`;
    }
});

