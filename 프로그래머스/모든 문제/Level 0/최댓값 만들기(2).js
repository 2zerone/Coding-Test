function solution(numbers) {
    numbers = numbers.sort((a, b) => a - b);
    let answer = numbers[numbers.length - 1] * numbers[numbers.length - 2];

    if(numbers[0] * numbers[1] > answer) answer = numbers[0] * numbers[1];
    return answer;
}

function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0] * numbers[1], numbers[numbers.length-1] * numbers[numbers.length-2]);
}