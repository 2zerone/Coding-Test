function solution(num_list, n) {
    const answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0, n));
    }

    return answer;
}

// splice 반환값, 원본 배열 변경