function solution(ineq, eq, n, m) {
    return +(
    ineq === ">" 
    ?
    eq === "=" ? (n>=m ? 1 : 0) : (n>m ? 1 : 0) 
    :
    eq === "=" ? (n<=m ? 1 : 0) : (n<m ? 1 : 0)
    );
}

// 직관적인 코드

const operations = {
    '>=': (n, m) => n >= m,
    '<=': (n, m) => n <= m,
    '>!': (n, m) => n > m,
    '<!': (n, m) => n < m,
  };
  
  function solution(ineq, eq, n, m) {
    const op = operations[ineq + eq];
    return Number(op(n, m));
  }