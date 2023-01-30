function solution(num, total) {
    let answer = [];
    let n = Math.floor(total / num);
    let start = num % 2 !== 0 ? n - Math.floor(num/2) : n - (num/2 - 1);
    
    for(let i=start; i<=n+num/2; i++) {
        answer.push(i);
    }
    
    return answer;
}

// 다른 풀이
function solution(num, total) {
    const min = Math.ceil(total/num - Math.floor(num/2));
    return new Array(num).fill(0).map((el,i)=>{return i+min;});
}