function solution(my_string, is_prefix) {
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}

// startsWith() 메서드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환
function solution(my_string, is_prefix) {
    return +my_string.startsWith(is_prefix);
  }