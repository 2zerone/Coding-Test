function solution(myString) {
    return myString.split('x').map(v => v.length);
}

// unravel an explanation
function solution(myString) {
    let cnt = 0;
    const answer = [];

    const newString = myString.split('');
    for(let i=0; i<newString.length; i++) {
        if(newString[i] !== 'x') cnt++;
        else {
            answer.push(cnt);
            cnt = 0;
        }
    }
    answer.push(cnt);

    return answer;
}