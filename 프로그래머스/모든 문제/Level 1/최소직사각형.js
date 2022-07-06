function solution(sizes) {
    for(let i=0; i<sizes.length; i++) {
        if(sizes[i][0] < sizes[i][1]) {
            let temp = sizes[i][0]
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = temp;
        }
    }

    let lenMax = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<sizes.length; i++) {
        if(sizes[i][0] > lenMax) lenMax = sizes[i][0];
    }

    let widMax = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<sizes.length; i++) {
        if(sizes[i][1] > widMax) widMax = sizes[i][1];
    }

    return lenMax*widMax;
}

// 간단하게 리팩토링해보기
function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach(s => {
        const [a, b] = s.sort((a,b) => a-b);
        if (a > h) h = a;
        if (b > w) w = b;
    });

    return w * h;
}