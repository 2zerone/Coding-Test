/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let answer = [];
    answer = nums.filter((v, i) => nums.indexOf(v) === i);
    answer = answer.filter((v) => v.length !== 0);
    console.log(answer);
};