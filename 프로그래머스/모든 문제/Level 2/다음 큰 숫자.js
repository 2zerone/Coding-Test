function solution(n) {
    let answer;

    let oneCount = 0;
    const binary = n.toString(2);
    for(let x of binary) if(x === '1') oneCount++;

    let newOneCount = 0;
    for(let i=n+1; i<1000000; i++) {
        let newBinary = i.toString(2);
        for(let x of newBinary) {
            if(x === '1') newOneCount++;
        }
        if(oneCount === newOneCount) {
            answer = i;
            break;
        } else newOneCount = 0;
    }

    return answer;
} 