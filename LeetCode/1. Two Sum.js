// 두 가지의 숫자만 뽑으라는 전제 하에
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length-1; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
};