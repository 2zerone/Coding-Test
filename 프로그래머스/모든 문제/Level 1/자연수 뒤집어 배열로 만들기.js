function solution(n) {
    let answer = [];
    let NtoS = n.toString().split('').reverse();
    for(let x of NtoS) {
        answer.push(parseInt(x));
    }
    return answer;
}