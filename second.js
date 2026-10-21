//israa lafi
///  jawad ballan
const limit = 237;
const result = GetPrimesInRange(limit);
console.log(result);

// Function to get prime numbers in a given range
function GetPrimesInRange(limit) {
    let count = 0;
    let prims = ""; // Fixed: declared and initialized as a string
    
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            prims += i + " ";
            count++;
        }
    }
    
    if (count == 0) {
        return "Until " + limit + " ,there are no prime numbers";
    } else {
        return "Found " + count + " primes: " + prims;
    }
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    
    let prime = true;
    for (let i = 2; i < num && prime; i++) {
        if (num % i == 0) {
            prime = false;
        }
    }
    
    return prime;
}