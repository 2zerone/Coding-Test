function solution(num_list) {
    let answer = 0;

    if(num_list.length > 10) {
        answer = num_list.reduce((acc, v) => acc + v, 0);
    } else {
        answer = num_list.reduce((acc, v) => acc * v, 1);
    }

    return answer;
}

// ather method
const solution = n => n.reduce((acc, v) => n.length>10 ? a+v : a*v)