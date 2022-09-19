var romanToInt = function(s) {
     const newHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    }
    
    let answer = 0;
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === 'I' && s[i+1] === 'V') {
            answer += 4;
            i++;
        } else if(s[i] === 'I' && s[i+1] === 'X') {
            answer += 9;
            i++;
        } else if(s[i] === 'X' && s[i+1] === 'L') {
            answer += 40;
            i++;
        } else if(s[i] === 'X' && s[i+1] === 'C') {
            answer += 90;
            i++;
        } else if(s[i] === 'C' && s[i+1] === 'D') {
            answer += 400;
            i++;
        } else if(s[i] === 'C' && s[i+1] === 'M') {
            answer += 900;
            i++;
        } else {
            answer += newHash[s[i]];
        }
    }
    
    return answer;
};