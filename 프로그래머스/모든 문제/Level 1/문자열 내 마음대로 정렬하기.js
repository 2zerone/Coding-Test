function solution(strings, n) {
    var answer = strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
    return answer;
}

// 가장 좋아요가 많은 풀이와 똑같이 풀었다!!