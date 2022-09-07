// 리트코드는 공간복잡도 문제로 array.reverse() 가 안된다고 함
var addTwoNumbers = function(l1, l2){
    let sum =
    parseInt(l1.reverse().toString().replace(/,/g, '')) +
    parseInt(l2.reverse().toString().replace(/,/g, ''))

    return sum.toString().split('').reverse();
}