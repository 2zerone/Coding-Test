function solution(s) {
    var answer = '';
    const n = s.length;
    
    if(n%2 === 0){
        answer = s[Math.ceil(n/2) - 1] + s[n/2]
    } else {
        answer = s[Math.ceil(n/2)-1]
    }
    return answer;
}

// function solution(s) {
//     return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }