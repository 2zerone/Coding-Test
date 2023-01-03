function solution(box, n) {
    let answer = 1;
    for(let x of box) {
        answer *= Math.floor(x/n);
    }
    return answer;
}

// refact
function solution(box, n) {
    return box.reduce((acc, v) => acc * Math.floor(v / n), 1);
}