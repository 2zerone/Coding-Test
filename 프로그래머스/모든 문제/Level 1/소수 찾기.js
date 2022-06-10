function solution(n) {
    var answer = 0;
    let count = 0;
    
    for(let i=2; i<=n; i++) {
        for(let j=2; j<=i; j++) {
            if(i % j === 0) count++;
            }
        if(count === 1) {
            answer++;
        }
        count = 0;
    }
    
    return answer;
}