function solution(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let answer = sum / arr.length

    return answer;
}
