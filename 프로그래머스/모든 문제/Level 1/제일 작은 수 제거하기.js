// 완성본
function solution(arr) {
    
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr.length ? arr : [-1];
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