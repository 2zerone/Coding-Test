function solution(s) {
    s = s.split(' ').sort((a, b) => a - b);

    let answer = [];
    answer.push(s[0]);
    answer.push(s[s.length-1]);

    answer = answer.toString().replace(',', ' ');
    return answer;
}

// 간단하게 리팩토링
function solution(s) {
    const answer = s.split(' ');
    return Math.min(...answer) + ' ' + Math.max(...answer);
}