'use strict';

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) 
{
    let sum=0n;
    const min=BigInt(Math.min(...arr));
    const max=BigInt(Math.max(...arr));

    for(let element of arr) {
        sum += BigInt(element);
    }

    console.log(Number(BigInt(sum) - BigInt(max)) +" "+ Number(BigInt(sum) - BigInt(min)));
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
