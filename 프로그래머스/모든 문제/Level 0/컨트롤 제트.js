function solution(s) {
    let arr = s.split(' ');
    let new_arr = [];

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 'Z') new_arr.pop();
        else new_arr.push(arr[i]);
    }

    let answer = new_arr.reduce((acc, v) => +acc + +v, 0);
    return answer;
}