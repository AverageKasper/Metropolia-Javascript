'use strict';
const prime_candidate = +prompt("Enter a number")
if (prime_candidate > 1) {

    let prime = true

    for (let i = 2; i <= Math.sqrt(prime_candidate) + 1; i++) {
        if (prime_candidate % i === 0) {
            document.getElementById("prime").innerHTML = `${prime_candidate} is not a prime number`;
            prime = false;
            break;
        }

    }
    if (prime) {
        document.getElementById("prime").innerHTML = `${prime_candidate} is a prime number`;
    }

} else {
    document.getElementById("prime").innerHTML = `${prime_candidate} is not a prime number`;
}