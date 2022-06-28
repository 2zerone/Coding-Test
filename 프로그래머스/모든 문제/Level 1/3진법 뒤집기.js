function solution(n) {
    const num = n.toString(3).split('').reverse().join('');
    const answer = parseInt(num, 3);
    return answer;
}

// 신박했던 풀이 (내 풀이를 한 줄로 정리한 듯한..)
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(''), 3);
}