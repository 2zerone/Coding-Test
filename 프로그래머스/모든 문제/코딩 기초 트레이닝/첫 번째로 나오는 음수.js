function solution(num_list) {
    let answer = -1;

    for(let i=0; i<num_list.length; i++) {
        if(num_list[i] < 0) {
            answer = i;
            break;
        }
    }

    return answer;
}

// other method (return firstNumber)
const solution = num_list => num_list.findIndex(v => v < 0)
