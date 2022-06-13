function solution(phone_number) {
    var answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
    return answer;
}

// substring 과 slice 중 slice가 '음수'를 지원하므로 slice를 쓰는 것이 좋다.