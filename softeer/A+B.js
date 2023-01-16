const sum = (x, y) => {
    return x + y;
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sumArr = [];

rl.on("line", function(line) {
    input = line.split(' ').map((v) => parseInt(v));
    sumArr.push(sum(input[0], input[1]))
}).on("close", function() {
    for(let i=1; i<=sumArr.length-1; i++) {
        console.log(`Case #${i}: ${sumArr[i]}`)
    }
    process.exit();
});