function solution(n) {
    let cnt = 0;
    let measure = 1;

    for(let i=4; i<=n; i++) {
        for(let j=2; j<=i; j++) {
            if(i % j === 0) measure++;
        }

        if(measure >= 3) cnt++;
        measure = 1;
    }

    return cnt;
}

// 방안(2)
function solution(n) {
    let dp = new Array(n+1).fill(1)
    for(let i = 2 ; i <= n ; i++){
        if(dp[i]){
            for(let j = 2 ; i*j <= n ; j++){
                dp[i*j] = 0
            }
        }
    }

    return dp.filter(el => el === 0).length
}