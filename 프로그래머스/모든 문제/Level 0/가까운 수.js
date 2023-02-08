function solution(array, n) {
    let min = Math.abs(n - array[0]);
    let answer = array[0];

    for(let i=1; i<array.length; i++) {
        if(Math.abs(array[i] - n) < min) {
            min = Math.abs(array[i] - n);
            answer = array[i];
        } else if(Math.abs(array[i] - n) === min) {
            if(array[i] < answer) answer = array[i];
        }
    }

    return answer;
}

// 비교함수를 이용한 풀이
let solution=(r,n)=>r.map(e=>[e,Math.abs(e-n)]).sort((a,b)=>a[1]-b[1]||a[0]-b[0])[0][0]