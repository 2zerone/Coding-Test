function solution(num_list) {
    let result = [];    
    
    for(let x of num_list) {
        result.unshift(x);
    }
    
    return result;
}