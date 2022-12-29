// 아스키
function solution(my_string) {
    return [...my_string].map((v) =>
                       v.charCodeAt() > 96
                       ? v.toUpperCase()
                       : v.toLowerCase()).join('');
}

function solution(my_string) {
    var answer = '';
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}