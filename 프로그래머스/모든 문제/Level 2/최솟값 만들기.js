function solution(A,B){
    var answer = 0;

    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for(let i=0; i<A.length; i++) {
        answer += A[i] * B[i];
    }

    return answer;
}

// for문 대신에 reduce 함수를 활용해보기
