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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the equalStacks function below.
 */
function equalStacks(h1, h2, h3) {
    let sum = [];
    let top1 = 0;
    let top2 = 0;
    let top3 = 0;
    
    sum[0] = h1.reduce((a, b) => a + b, 0);
    sum[1] = h2.reduce((a, b) => a + b, 0);
    sum[2] = h3.reduce((a, b) => a + b, 0);

    while(true) {
        if(!h1.length || !h2.length || !h3.length) {
            return 0;
        }
        if(sum[0] === sum[1] && sum[1] === sum[2]) {
            return sum[0];
        }
        if(sum[0] >= sum[1] && sum[0] >= sum[2]) {
            sum[0] = sum[0] - h1[top1++];
        } else if(sum[1] >= sum[0] && sum[1] >= sum[2]) {
            sum[1] = sum[1] - h2[top2++];
        } else if(sum[2] >= sum[0] && sum[2] >= sum[1]) {
            sum[2] = sum[2] - h3[top3++];
    }
}

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n1N2N3 = readLine().split(' ');

    const n1 = parseInt(n1N2N3[0], 10);

    const n2 = parseInt(n1N2N3[1], 10);

    const n3 = parseInt(n1N2N3[2], 10);

    const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

    let result = equalStacks(h1, h2, h3);

    ws.write(result + "\n");

    ws.end();
}
