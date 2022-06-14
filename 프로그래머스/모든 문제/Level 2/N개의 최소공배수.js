function solution(arr) {
    let answer = 1;

    const gcd = (a, b) => {
    while(b > 0) {
        let tmp = b;
        b = a % b;
        a = tmp;
        }
        return a;
    }

    const lcm = (a, b) => {
        return (a * b) / gcd(a, b);
    }

    for(let i=0; i<arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }

    return answer;
}

// 다른 사람의 풀이
function nlcm(num) {
    return num.reduce((a,b) => a*b / gcd(a,b)) // 두 수의 최소 공배수는 (두 수의 곱 / 두 수의 최대 공약수) 이라는 특징으로 구할 수 있다.
   }
   
   function gcd(a, b) {
     return a % b ? gcd(b, a%b) : b
   }

// 3개 이상의 정수의 최대공약수 gcd(a, b, c) = gcd(gcd(a, b), c)의 성질