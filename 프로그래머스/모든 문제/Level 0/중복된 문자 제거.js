// Set은 중복 데이터 저장을 허용하지 않는 자료구조
// 배열의 모든 요소를 Set에 추가하면 중복 제거됨
// new Set(arr)는 배열의 데이터가 추가된 Set 객체가 생성, 중복은 허용되지 않기 때문에 1개의 요소만 추가됨

function solution(my_string) {
    let arr = my_string.split('');
    const set = new Set(arr);
    const newArr = [...set];
    return newArr.join('');
}

// refactoring
function solution(my_string) {
    return [...new Set(my_string)].join('');
}