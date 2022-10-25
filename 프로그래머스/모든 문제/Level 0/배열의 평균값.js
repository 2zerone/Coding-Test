function solution(numbers) {
    let num = 0;
    for(let x of numbers) {
        num += x;
    }
    
    return num / numbers.length;
}