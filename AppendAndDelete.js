'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) 
{
    let count=0;
    let matchingCharacters=0;
    for(let i = 0; i < Math.min(s.length, t.length); i++) {
        if(s[i] != t[i]) {
           break;
        } else {
            matchingCharacters++;
        }
    }

    count = (s.length - matchingCharacters) + (t.length - matchingCharacters);
    if(k < count) {
        return "No";
    }
    if(count % 2 == k % 2) {
        return "Yes";
    }
    if(s.length + t.length <= k) {
        return "Yes";
    }
    return "No";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine(), 10);

    let result = appendAndDelete(s, t, k);

    ws.write(result + "\n");

    ws.end();
}
