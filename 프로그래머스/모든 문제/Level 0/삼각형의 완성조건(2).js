// infer only the answer
function solution(sides) {
    return Math.min(...sides)*2-1
}

// a fundamental algorithm
function solution(sides) {
    const n = Math.max(...sides) - Math.min(...sides);
    const firstCase = Math.max(...sides) - n;
    const num = sides.reduce((a, b) => a + b, 0);
    const secondCase = num - Math.max(...sides) - 1;

    return firstCase + secondCase;
}