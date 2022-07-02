function solution(brown, yellow) {
    const sum = brown + yellow;

    for(let len=3; len<=brown; len++) {
        if(sum % len === 0) {
            const width = sum / len;
            if((width-2) * (len-2) === yellow) return [width, len];
        }
    }
}