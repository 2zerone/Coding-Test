function solution(s) {
    var answer = '';
    let flag = true;
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === ' ') {
            flag = false;
            answer += s[i];
        } else if (flag) {
            answer += s[i].toUpperCase();
        } else {
            answer += s[i].toLowerCase();
        }
        flag = !flag
    }
    return answer;
}