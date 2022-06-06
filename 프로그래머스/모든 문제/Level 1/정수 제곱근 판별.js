function solution(n) {
    var answer = 0;
    let num = Math.sqrt(n);

    if(num % 1 === 0) {
        answer = (num + 1) * (num + 1)
    } else answer = -1;

    return answer;
}