const crypto = require("crypto");

// const input = "100xdevs";
// const hash = crypto.createHash("Sha256").update(input).digest("hex");

// console.log("Demo", hash);

// Assignment #1

// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

function inputWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputString = input.toString();
        let hash = crypto.createHash("Sha256").update(inputString).digest("hex");
        if (hash.startsWith(prefix)) {
            return {
                input : inputString,
                hash: hash
            }
        }
        input++;
    }
}

// Find and print the input string and hash
const result = inputWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);