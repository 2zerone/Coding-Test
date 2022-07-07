function solution(priorities, location) {

    let maxNum;
    let i = 0;

    while(true) {
        maxNum = Math.max.apply(null, priorities);
        let j = priorities.shift();

        if(j === maxNum) {
            i++;
            if(location === 0) {
                return i;
            }
        } else {
            priorities.push(j);
        }
        location--;

        if (location == -1) {
            location = priorities.length - 1;
        }
    }
}