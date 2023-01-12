function solution(n) {
    let answer = 1;

    while(true) {
        if(n * answer % 6 === 0) break;
        answer++;
    }

    return answer * n / 6;
}