function solution(n, numlist) {
    let answer = [];
    for(let x of numlist) {
        if(x % n === 0) answer.push(x);
    }
    return answer;
}

function solution(n, numlist) {
    return numlist.filter(v=>v%n===0);
}