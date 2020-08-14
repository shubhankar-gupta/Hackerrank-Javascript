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

// Complete the staircase function below.
function staircase(n) 
{
    for(let i=1;i<=n;i++)
    {
        let row="";
        for(let j=1;j<=n-i;j++)
        {
            row+=" ";
        }
        
        for(let k=1;k<=i;k++)
        {
            row+='#';
        }
        console.log(row);
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
