function solution(n) {
    let answer = '';
    const numArr = [4, 1, 2];
    
    while(n) {
        answer = numArr[n%3] + answer;
        // 0 == false
        n = n%3 === 0 ? n/3 -1 : Math.floor(n/3); 
    }
     
    return answer;
}

// 최고의 풀이
function change124(n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
  }