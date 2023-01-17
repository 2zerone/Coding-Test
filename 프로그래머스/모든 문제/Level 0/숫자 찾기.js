function solution(num, k) {
    let answer = -1;
    let newNum = num.toString().split('');
    for(let i=0; i<newNum.length; i++) {
        if(parseInt(newNum[i]) === k) {
            answer = i+1;
            break;
        }
    }

    return answer;
}

// simple code
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}