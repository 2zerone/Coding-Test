// 1번 풀이
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

// 2번 풀이
function solution(before, after) {
    let answer = 1;
    let sum = (before + after).split('').sort();
    for(let i=0; i<sum.length; i+=2) {
        if(sum[i] !== sum[i+1]) answer = 0;
    }

    return answer;
}
