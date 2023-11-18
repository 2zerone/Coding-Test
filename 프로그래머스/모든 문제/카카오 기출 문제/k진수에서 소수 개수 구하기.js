const solution = (n, k) => {
    let number = n.toString(k).split("0");
    return number.filter(v => v !== "" && isPrime(Number(v))).length;
}

const isPrime = (num) => {
    if(num <= 1) return false;

    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    
    return true;
}