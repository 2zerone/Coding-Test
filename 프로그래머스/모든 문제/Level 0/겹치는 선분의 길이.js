function solution(lines) {
    let answer = 0;
    let line = new Array(200).fill(0);
  
    for (let i = 0; i < 3; i++) {
      let left = lines[i][0];
      let right = lines[i][1];
  
      for (let j = left; j < right; j++) {
        line[j + 100] += 1;
      }
    }
  
    for (let i in line) {
      if (line[i] > 1) {
        answer += 1;
      }
    }
  
    return answer;
  }