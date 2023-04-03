function solution(numbers, k) {
    let answer = 0;
    
    for(let i=0; i<k; i++) {
        answer += 2;    
        if(answer > numbers.length) answer -= numbers.length;
    }
    
    return numbers[answer - 2];
}

// progress
function solution(numbers, k) {
    let one_array = [];
    let two_array = [];
    let answer = 0;
    
    if(numbers.length % 2 === 0) {
        for(let i=0; i<numbers.length; i+=2) {
            one_array.push(numbers[i]);
        }
        
        answer = one_array[(k-1) % one_array.legth];
    } else {
        for(let i=0; i<numbers.length; i+=2) {
            two_array.push(numbers[i]);
        }
        for(let j=1; j<numbers.length; j+=2) {
            two_array.push(numbers[j]);
        }
        
        answer = two_array[(k-1) % two_array.length];
    }
    
    return answer;
}