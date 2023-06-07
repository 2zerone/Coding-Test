function solution(num_list, n) {
    let answer = [];

    for(let i=0; i<num_list.length; i+=n) answer.push(num_list[i]);

    return answer;
}

// other method
const solution = (num_list, n) => num_list.filter((_, i) => !(i % n)) // _ 는 사용하지 않는 변수를 의미