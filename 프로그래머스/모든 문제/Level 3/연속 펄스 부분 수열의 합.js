// other method
function solution(sequence) {
    let arrP = []
    let arrM = []
    let answer = 0
    
    // 연속 부분 배열합 계산
    sequence.forEach((el, i) => {
        if(i === 0) {
            arrP.push(el)
            arrM.push(-el)
        } else if(i % 2 === 0) {
            arrP.push(Math.max(el, arrP[i - 1] + el))
            arrM.push(Math.max(-el, arrM[i - 1] - el))
        } else {
            arrP.push(Math.max(-el, arrP[i - 1] - el))
            arrM.push(Math.max(el, arrM[i - 1] + el))
        }
        
        answer = Math.max(answer, arrP[i], arrM[i])
    })
    
    return answer
}