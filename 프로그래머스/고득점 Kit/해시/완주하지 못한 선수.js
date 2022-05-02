function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

// 답은 나오지만 효율성 0인 해답
// function solution(participant, completion) {
//     var answer = '';
    
    
//     for(let x of completion) {
//         participant.splice(participant.indexOf(x), 1);
//     }
//     answer += participant
//     return answer;
// }