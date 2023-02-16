function solution(i, j, k) {
    let cnt = 0;
    for(let a=i; a<=j; a++) {
        let num = a.toString().split('');
        for(let x of num) {
            if(+x === k) cnt++;
        }
    }

    return cnt;
}