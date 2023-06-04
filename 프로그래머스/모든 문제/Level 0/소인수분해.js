// general method
function solution(n) {
    let answer = [];

    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            answer.push(i);
            n /= i;
        }
    }
    
    if(n >= 2){
        answer.push(n);    
    }
    
    let ans = Array.from(new Set(prime));
    return ans.sort((a,b) => a - b);
}

// other answer
function solution(n) {
    let result = [];
    let divisor = 2;
    
    while (n >= 2) {
      if (n % divisor === 0) {
        result.push(divisor)
        n = n / divisor;
      }
      
       else divisor ++;
      
    }
    
    return [...new Set(result)];
  }
