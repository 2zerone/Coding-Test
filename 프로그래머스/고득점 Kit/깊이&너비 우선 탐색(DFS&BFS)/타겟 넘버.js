function solution(numbers, target) {
    var answer = 0;
    
    const n = numbers.length;
    
    function dfs(cnt, sum) {
        if (cnt === n) {
            if (target === sum) {
                answer++
            }
            return;
        }
        
        dfs(cnt+1, sum+numbers[cnt]);
        dfs(cnt+1, sum-numbers[cnt]);
    }
    
    dfs(0, 0);
    return answer;
}

// 다른 답안
function solution(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}
