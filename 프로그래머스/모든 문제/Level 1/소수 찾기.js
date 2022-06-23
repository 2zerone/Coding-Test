// 통과 안되는 코드임
// function solution(n) {
//     var answer = 0;
//     let count = 0;
    
//     for(let i=2; i<=n; i++) {
//         for(let j=2; j<=i; j++) {
//             if(i % j === 0) count++;
//             }
//         if(count === 1) {
//             answer++;
//         }
//         count = 0;
//     }
    
//     return answer;
// }

function solution(n) {
    let answer = 0;

    const arr = new Array(n+1).fill(true);
    const range = Math.sqrt(n);

    for(let i=2; i<range+1; i++) {
        if(arr[i] === false) continue;
        for(let j=i*i; j<n+1; j+=i) arr[j] = false;
    }

    for(let i=2; i<n+1; ++i) {
        if(arr[i] === true) answer++;
    }

    return answer;
}