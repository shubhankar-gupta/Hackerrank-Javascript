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

// Complete the climbingLeaderboard function below.

function climbingLeaderboard(scores, alice) 
{
    /*let count=1;
    let leaderboard=new Array(scores.length);
    for(let i=0;i<scores.length;i++)
    {
        if(scores[i]==scores[i-1] && i!=0)
        {
            leaderboard[i]=leaderboard[i-1];
        }
        else
        {
            leaderboard[i]=count++;
        }
    }
    //count--; denotes the highest rank
    
    let rank=[];
    let index=0;
    for(let i=0;i<alice.length;i++)
    {
        let alice_score=alice[i];
        if(alice_score<scores[scores.length-1])
        {
                rank[index++]=count;
                continue;
        }
        if(alice_score>=scores[0])
        {
                rank[index++]=1;
                continue;
        }
        for(let j=scores.length-1;j>=0;j--)
        {
            if(alice_score==scores[j])
            {
                rank[index++]=leaderboard[j];
                break;
            }
            if(alice_score>scores[j] && alice_score<scores[j-1])
            {
                rank[index++]=leaderboard[j];
                break;
            }
        }
    }
    return rank;*/
    //it does not run two cases due to timeout
    let Scores=[...new Set(scores)];
    let count=Scores.length-1;
    let rank=[];

    for(let i=0;i<alice.length;i++)
    {
        let alice_score=alice[i];
        while(alice_score>Scores[count] && count>0)
            count--;
        if(alice_score>=Scores[count])
            rank.push(count+1);
        else
            rank.push(count+2);
    }
    return rank;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
