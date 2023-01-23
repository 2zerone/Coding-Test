function solution(n) {
    let answer = 1;

    for(let i = 1; i <= n; i++){
        answer *= i;

        if(answer === n){
            return i;
        }

        if(answer > n){
            return i - 1;
        }
    }
}

//
function solution(n) {
    let i = 1;
    let f = 1;
    while (f*i < n) f*=++i;
    return i;
}