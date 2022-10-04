// 아래의 경우 parseInt의 최대 숫자 표현 때문에 테스트케이스에서 실패하는 경우가 생김
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let newA = parseInt(a, 2);
    let newB = parseInt(b, 2);

    return (newA + newB).toString(2);
};

// 아래의 경우 통과
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    return sum.toString(2);
};