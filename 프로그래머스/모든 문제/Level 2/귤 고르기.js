// primitive solution
const solution = (k, tangerine) => {
    tangerine = tangerine.sort((a, b) => a - b);
    // const newTangerine = [...new Set(tangerine)];
    let type = [];
    let tmp = 1, cnt = 0, num = 0;

    for(let i=0; i<tangerine.length-1; i++) {
        if(tangerine[i] === tangerine[i+1]) {
            tmp++;
        } else {
            type.push(tmp);
            tmp = 1;
        }
    }
    type.push(tmp);
    type = type.sort((a, b) => b - a);

    while(k>0) {
        k -= type[num];
        cnt++;
        num++;
    }
    return cnt;
}

// universal solution
const solution2 = (k, tangerine) => {
    let answer = 0;
    const tanDict = {};

    tangerine.forEach((v) => tanDict[v] = (tanDict[v] || 0) + 1);
    const tanArr = Object.values(tanDict).sort((a, b) => b - a);

    for (const x of tanArr) {
      answer++;
      if (k > x) k -= x;
      else break;
    }
    return answer;
  }