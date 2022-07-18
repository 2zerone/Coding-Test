function solution(word) {
    const AEIOU = { A:0, E:1, I:2, O:3, U:4 };
    const sum = [781, 156, 31, 6, 1];

    return word.split('').reduce((acc, v, idx) => acc + AEIOU[v] * sum[idx]+1, 0);
}

// 규칙을 찾는데 시간이 좀 걸린 문제