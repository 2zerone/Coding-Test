function solution(n) {
    let num = n.toString().split('');
    let answer = 0;

    for(let x of num) {
        answer += parseInt(x);
    }

    return answer;
}

// 가시성
function solution(n) {
    return n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);
  }