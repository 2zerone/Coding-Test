const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const n = line.split(' ');
    if(+n % 2 === 0) console.log(`${n} is even`);
    else console.log(`${n} is odd`);
});