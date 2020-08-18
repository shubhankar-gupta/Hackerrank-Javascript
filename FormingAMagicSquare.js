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

// Complete the formingMagicSquare function below.
function findCost(inputMatrix,magicMatrix)
{
    inputMatrix = inputMatrix.map(s=>s.join('')).join('');
    let cost = 0;
    for(let i = 0; i < 9; i++) {
        cost += Math.abs(s[i] - magicMatrix[i]);
    }
    return cost;
}

function formingMagicSquare(s) 
{
    let sum;
    const magicSquares = ['618753294','816357492','834159672','438951276','672159834','276951438','294753618','492357816'];
    const costs = new Array(magicSquares.length);

    for(let i = 0; i < magicSquares.length; i++) {
        costs[i] = findCost(s, magicSquares[i]);
    }

    let min = Infinity;

    for(let cost of costs) {
        if(min > cost) {
            min = cost;
        }
    }
    return min;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}
