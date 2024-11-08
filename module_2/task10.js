'use strict';

let candidates = [];
const candidate_amount = +prompt("How many candidates?");
for (let i = 1; i <= candidate_amount; i++) {
    let new_candidate = prompt(`Enter the name of candidate number ${i}`);
    candidates.push({ name: new_candidate, votes: 0 });
}
const voters = +prompt("How many voters?");
for (let i = 1; i <= voters; i++) {
    const vote = prompt(`Enter voter ${i}. vote (name)`);
    if (vote) {
        const candidate = candidates.find(candidate => candidate.name === vote);
        if (candidate) {
            candidate.votes++;
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes)

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes`);
console.log("Results:");
for (const candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
}