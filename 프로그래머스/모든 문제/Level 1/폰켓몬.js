function solution(nums) {
    const newArray = [];
    const r = nums.length;
    const maxR = r/2;
    const array = nums.sort((a, b) => a - b);

    newArray.push(array[0]);
    for(let i=0; i<r-1; i++) {
        if(newArray.length === maxR) break;
        if(array[i] !== array[i+1]) newArray.push(array[i+1])
    }

    return newArray.length;
}
