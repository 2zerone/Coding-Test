function solution(my_string, overwrite_string, s) {
    const answer = [...my_string];
    answer.splice(s, overwrite_string.length, overwrite_string);
    return answer.join('');
}

/*
splice(a, b, ' ');
a = 배열의 변경을 시작할 index
b = 배열에서 제거할 요소의 개수
' ' = 배열에 추가할 요소
*/