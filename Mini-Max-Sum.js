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
    let min=BigInt(Math.min(...arr));
    let max=BigInt(Math.max(...arr));
    for(let x of arr)
    {
        sum+=BigInt(x);
    }

    console.log(Number(BigInt(sum)-BigInt(max))+" "+Number(BigInt(sum)-BigInt(min)));
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
