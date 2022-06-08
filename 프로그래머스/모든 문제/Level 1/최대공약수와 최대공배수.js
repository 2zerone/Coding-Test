function solution(n, m) {
    var answer = [];

    let maxDivisor = 1;
    for(let i=2; i<=Math.min(n, m); i++) {
        if(n % i === 0 && m % i === 0) maxDivisor = i;
    }

    let minMultiply = 1;
    while(true) {
        if(minMultiply % n === 0 && minMultiply % m === 0) break;  
        minMultiply++;
    }

    answer.push(maxDivisor, minMultiply)

    return answer;
}
