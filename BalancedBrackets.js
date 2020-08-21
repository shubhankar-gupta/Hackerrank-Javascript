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

// Complete the isBalanced function below.
function isBalanced(s) {
    let stack = [];
    let bracketsMap = new Map();
    bracketsMap.set("(", ")").set("{", "}").set("[", "]");

    for(let i = 0; i < s.length; i++) {
        if(s[i] == "{" || s[i] == "(" || s[i] == "[") {
            stack.push(s[i]);
        }
        else {
            if(s[i] != bracketsMap.get(stack.pop())) {
                return "NO"; 
            }
        }
    }

    if(stack.length != 0) {
        return "NO";
    }
    
    return "YES";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}
