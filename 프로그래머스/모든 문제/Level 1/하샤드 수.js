function solution(arr) {
    let sum = arr.toString().split('').reduce((a, b) => a + parseInt(b), 0);

    if(arr % sum === 0) return true;
    else return false;
}