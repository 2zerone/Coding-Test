function solution(num_str) {
    return num_str.split('').map(Number).reduce((acc, v) => acc + v, 0);
}