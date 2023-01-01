function solution(n, t) {
    let answer = n;
    for(let i=1; i<t+1; i++) {
        answer *= 2
    }
    return answer;
}

function solution(n, t) {
    return n << t;
  }