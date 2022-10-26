function solution(array, n) {
    let result = 0;
    for(let x of array) {
        if(x === n) result++;
    }
    
    return result;
}