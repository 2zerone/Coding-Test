function solution(n, arr1, arr2) {
    let answer = [];

    arr1 = arr1.map((v) => v.toString(2).padStart(n, 0));
    arr2 = arr2.map((v) => v.toString(2).padStart(n, 0));

    for(let i=0; i<n; i++) {
        let newArr1 = arr1[i];
        let newArr2 = arr2[i];
        let map = '';
        for(let j=0; j<n; j++) {
            if(newArr1[j] === '1' || newArr2[j] === '1') map += '#';
            else map += ' ';
        }
        answer.push(map);
    }
    return answer;
}

// 정규표현식을 이용한 다른 사람의 풀이
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))