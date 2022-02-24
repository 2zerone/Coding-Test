//첫번 째 방법
function solution(lottos, win_nums) {
    var answer = [];

    const right = lottos.filter(lotto => win_nums.includes(lotto)).length;
    const zero_nums = lottos.filter(lotto => lotto == 0).length

    let min = 7 - right >= 6 ? 6 : 7 - right;
    let max = min - zero_nums < 1 ? 1 : min - zero_nums;

    answer = [max, min]
    return answer;
}