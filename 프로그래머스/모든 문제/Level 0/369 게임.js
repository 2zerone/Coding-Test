function solution(order) {
    let count = 0;

    let newOrder = order.toString().split('');
    for(let x of newOrder) {
        if(x % 3 === 0) count++;
    }
    
    return count;
}