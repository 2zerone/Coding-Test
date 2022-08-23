function solution(N, stages) {
    const answer = [];
    for(let i=1; i<=N; i++){
        const end = stages.filter((x) => x >= i).length;
        const current = stages.filter((x) => x === i).length;
        answer.push([i, current/end]);
    }
    answer.sort((a, b) => b[1] - a[1]);
    return answer.map(v => v[0]);
}