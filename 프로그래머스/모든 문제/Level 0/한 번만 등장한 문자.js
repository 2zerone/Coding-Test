function solution(s) {
    const sorted = s.split('').sort();
    const set = new Set(sorted);
    let answer = [...set];

    for(let i=1; i<s.length; i++) {
        if(sorted[i] === sorted[i-1]) {
            answer = answer.filter((v) => v !== sorted[i]);
        }
    }

    return answer.join('');
}