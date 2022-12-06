function solution(num_list) {
    const answer = [];

    let a = 0, b = 0
    for(let x of num_list) {
        x % 2 === 0 ? a++ : b++
    }
    answer.push(a, b);
    return answer;
}