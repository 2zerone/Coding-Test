function solution(arrayA, arrayB) {
    let a = getAnswer(arrayA, arrayB);
    let b = getAnswer(arrayB, arrayA);

    return Math.max(a,b);
}

function getAnswer(x, y){
    let answer = 0;
    const gcd =  (a, b) => a % b === 0 ? b : gcd(b, a % b);

    x.forEach(v => answer = gcd(answer, v));

    if(y.some(v => v % answer === 0)) return 0;

    return answer;
}