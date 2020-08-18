'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores)
{
    let size = scores.length;
    let minBreak = 0;
    let maxBreak = 0;
    let min = Infinity;
    let max = -Infinity;
    min = scores[0];
    max = scores[0];
    for(let i = 1; i < size; i++) {
        if(scores[i] < min) {
            min = scores[i];
            minBreak++;
        }
        if(scores[i] > max) {
            max = scores[i];
            maxBreak++;
        }
    }
    return maxBreak + " " + minBreak;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result + '\n');

    ws.end();
}
