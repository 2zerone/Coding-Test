function solution(numbers, n) {
    return numbers.reduce((acc, v) => acc > n ? acc : acc+v, 0);
}