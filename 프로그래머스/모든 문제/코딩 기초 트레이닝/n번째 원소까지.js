function solution(num_list, n) {
    return num_list.slice(0, n); // splice도 가능
}

/*
slice와 splice의 차이
slice()는 원본 배열을 변경하지 않고 일부 요소를 추출하여 새로운 배열을 반환
splice()는 원본 배열을 수정하여 요소를 추가하거나 삭제
*/