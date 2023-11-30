const solution = (arr, idx) => {
    let answer = 0;

    for(let i=idx; i<arr.length; i++) {
        if(arr[i] === 1) {
            answer = i;
            break;
        }
        else answer = -1;
    }

    return answer;
}

// indexOf func
const solution2 =(v, i)=>v.indexOf(1, i);