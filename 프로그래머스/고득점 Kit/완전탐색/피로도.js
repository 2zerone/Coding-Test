function solution(k, dungeons) {
    let answer = 0;
    const visit = new Array(dungeons.length).fill(false);

    const dfs = (k, currentCnt) => {
        answer = Math.max(currentCnt, answer);

        for(let i=0; i<dungeons.length; i++) {
            const [minNeed, consume] = dungeons[i];
            if(k >= minNeed && !visit[i]) {
                visit[i] = true;
                // console.log('true', visit);
                dfs(k - consume, currentCnt + 1);
                visit[i] = false;
                // console.log('false', visit);
            }
        }
    }
    dfs(k, 0);
    return answer;
}