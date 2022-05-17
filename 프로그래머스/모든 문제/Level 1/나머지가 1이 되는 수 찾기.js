function solution(n) {
    let answer = Number.MAX_SAFE_INTEGER;
    
    for(let i=2; i<n; i++) {
        if(n % i === 1) {
            if(i < answer) answer = i;
        }
    }
    
    
    return answer;
}