// 첫번 째 방법(고전)
function solution(absolutes, signs) {
    let result = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            result += absolutes[i]
        } else {
            result -= absolutes[i]
        }
    }

    return result
}