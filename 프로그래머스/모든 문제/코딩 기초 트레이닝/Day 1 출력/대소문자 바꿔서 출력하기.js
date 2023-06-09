const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const n = line.split('');
    const n2 = line.toUpperCase().split('');
    let arr = [];
    
    for(let i=0; i<n.length; i++) {
        if(n[i] === n2[i]) arr.push(n[i].toLowerCase());
        else arr.push(n[i].toUpperCase());
    }
    
    console.log(arr.join(''));
    
});

/* refactoring
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const n = line.split('');
    const answer = n.map((v) => v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase())
    console.log(answer.join(''));
});
*/