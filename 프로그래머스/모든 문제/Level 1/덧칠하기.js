const solution = (n, m, section) => {
    let answer = 1;
    let a = section[0];

    section.map(v => {
      if (a + m - 1 < v) {
        a = v;
        return answer++;
      }
    });
    return answer;
  };