const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const compare = line.split(' ').map((el) => parseInt(el));
    if(compare[0] > compare[1]) console.log('A');
    else if(compare[0] < compare[1]) console.log('B');
    else console.log('same');
}).on('close', () => {
    process.exit();
})