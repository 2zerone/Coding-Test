// 나열해보니 피보나치였음.
function solution(n) {
    const fibo = [0, 1, 2];
    for(let i=3; i<=n; i++) {
        fibo[i] = (fibo[i-1] + fibo[i-2])%1234567;
    }
    return fibo[n];
}

// 괜찮아 보였던 풀이
function jumpCase(num) {
    return num == 1 ? 1 : num == 2 ? 2 : jumpCase(num-1)+jumpCase(num-2); 
  }