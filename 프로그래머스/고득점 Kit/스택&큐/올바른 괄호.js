function solution(s){
    let answer = '';
    let stack = [];
    s = s.toString().split('');

    for(let i=0; i<s.length; i++) {
        if(s[i] === '(') stack.push(s[i])
        else stack.pop();

    }

    answer = stack.length === 0 ? true : false;
    if(s[0] === ')') answer = false;

    return answer;
}