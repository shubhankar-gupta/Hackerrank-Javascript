'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
    // Write your code here
    const frequencyOfRemainders = new Array(k).fill(0);
    const size = s.length;
    let result;

    for(let i = 0; i < size; i++) {
        frequencyOfRemainders[s[i]%k]++;
    }

    if(k % 2 == 0) {
        frequencyOfRemainders[k/2] = Math.min(frequencyOfRemainders[k / 2], 1);
    }

    result = Math.min(frequencyOfRemainders[0], 1);

    for(let i = 1; i <= k / 2; i++) {
        result += Math.max(frequencyOfRemainders[i], frequencyOfRemainders[k - i]);
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const result = nonDivisibleSubset(k, s);

    ws.write(result + '\n');

    ws.end();
}
