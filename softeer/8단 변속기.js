const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [8, 7, 6, 5, 4, 3, 2, 1];

rl.on('line', (line) => {
    input = line.split(' ').map((el) => parseInt(el));
    //rl.close();
}).on('close', () => {
    if(JSON.stringify(input) === JSON.stringify(arr1)) console.log('ascending');
    else if(JSON.stringify(input) === JSON.stringify(arr2)) console.log('descending');
    else console.log('mixed'); 
    process.exit();
})