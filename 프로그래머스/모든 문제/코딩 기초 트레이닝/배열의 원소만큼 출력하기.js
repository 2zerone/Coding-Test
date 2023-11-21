// map 활용
const solution = (arr) => {
    let answer = [];

    arr.map((v) => {
        for(let i=0; i<v; i++) answer.push(v);
    });

    return answer;
}

// reduce 활용
const solution2 = (arr) => {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}