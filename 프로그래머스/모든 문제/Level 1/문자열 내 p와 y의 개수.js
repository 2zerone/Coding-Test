function solution(s){
    var answer = true;
    let pN = 0, yN = 0;

    s = s.toLowerCase();

    for (let x of s) {
        if(x === 'p') pN++;
        if(x === 'y') yN++;
    }

    if(pN === yN || pN === yN === 0) return answer;
    else answer = false;

    return answer;
}

// function solution(s){
//     return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }
