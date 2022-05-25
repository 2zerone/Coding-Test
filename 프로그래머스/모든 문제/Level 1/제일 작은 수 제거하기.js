// 테스트케이스는 통과 하지만 정확성 0점
function solution(arr) {
    
    arr.sort((a, b) => b - a);
    let min = arr[0];
    for(let x of arr) {
        if(x < min) min = x;
    }
    
    let answer = arr.filter((res) => res !== min);
    
    if(arr.length === 1) return [-1]
    
    return answer;
}

// 정확성은 100점이지만 최솟값이 2개 이상일 경우 찝찝한 코드
function solution(arr) {

    if(arr.length > 1) {
        let min = Math.min(...arr);
        let idx = arr.indexOf(min);
        arr.splice(idx, 1);
    } else return [-1];

    return arr;
}