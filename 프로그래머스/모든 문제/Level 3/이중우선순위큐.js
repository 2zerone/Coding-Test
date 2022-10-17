function solution(operations) {
    const pq = [];
    
    operations.forEach(operation => {
        let [command, num] = operation.split(' '); //I. 16
        num = parseInt(num);
        switch(command){
            case 'I':
                pq.unshift(num);
                break;
            case 'D':
                if(pq.length == 0) break;
                if(num ==1) pq.sort((a,b) => b - a);
                else if(num == -1) pq.sort((a,b) => a - b);
                pq.shift();
                break;
        }
    });

    if(!pq.length) return [0,0];

    pq.sort((a,b) => b - a);
    return [pq[0], pq[pq.length - 1]];
}