function solution(progresses, speeds) {
    let answer = [0];

    let r_days = [];
    for (let i=0; i<progresses.length; i++) {
        let days = Math.ceil((100-progresses[i]) / speeds[i])
        r_days.push(days);
    }
    // 줄이면 let r_days = progresses.map((x, index) => Math.ceil((100 - x) / speeds[index])); 
    
    let stack = r_days[0];
    
    for (let j=0, k=0; j<r_days.length; j++) {
        if(r_days[j] <= stack) {
            answer[k] += 1;
        } else {
            stack = r_days[j];
            answer[++k] = 1;
        }
    }
    return answer;
}