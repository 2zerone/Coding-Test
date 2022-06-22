function solution(n, lost, reserve) {
    let result = 0;
    const students = new Array(n).fill(1);

    for(let i=0; i<lost.length; i++) {
        students[lost[i]-1]--;
    }

    for(let j=0; j<reserve.length; j++) {
        students[reserve[j]-1]++;
    }

    for(let k=0; k<n; k++) {
        if(students[k] === 0 && students[k-1] === 2) {
            students[k]++;
            students[k-1]--;
        } else if(students[k] === 0 && students[k+1] === 2) {
            students[k]++;
            students[k+1]--;
        }
    }
    for(let x of students) {
        if(x > 0) result++;
    }
    return result;
}