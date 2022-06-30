function solution(strings, n) {
    var answer = strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
    return answer;
}

// 가장 좋아요가 많은 풀이와 똑같이 풀었다!!

function solution(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);

        if (chr1 == chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    })
}

// 새로운 접근법 (sort 함수 안에 다양한 식들이 있을 수 있다.)