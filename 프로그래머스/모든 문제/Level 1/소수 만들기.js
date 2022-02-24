function isResult(n) {
    for (let l = 2; l < n; l++) {        // l <= Math.sqrt(n) 도 가능
        if (n % l == 0) {
            return false
        }
    }
    return true
}


function solution(nums) {

    let result = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k]
                //console.log(sum)
                if (isResult(sum)) {
                    //console.log(isResult(sum))
                    result++
                }
            }
        }
    }

    return result
}