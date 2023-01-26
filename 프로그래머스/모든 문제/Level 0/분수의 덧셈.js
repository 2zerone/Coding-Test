function solution(numer1, denom1, numer2, denom2) {
    let top = numer1 * denom2 + numer2 * denom1;
    let bottom = denom1 * denom2;

    let gcd = 0;
    for(let i=1; i<=Math.min(top, bottom); i++){
        if(top % i === 0 && bottom % i === 0) gcd = i;
    }

    return [top / gcd, bottom / gcd];
}

// 최대공약수
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}