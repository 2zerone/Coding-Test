function solution(number) {
    const result = number.split('').map(Number).reduce((acc, v) => acc + v, 0);
    return result % 9;
}