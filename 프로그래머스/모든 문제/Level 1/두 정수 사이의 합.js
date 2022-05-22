function solution(a, b) {
    var answer = 0;

    if(a > b) {
        [a, b] = [b, a]
    }

    for(let i=a; i<b+1; i++) {
        answer += i;
        if(a === b) answer = a;
    }
    return answer;
}


// 다시 풀어보기 (시간복잡도 높음)