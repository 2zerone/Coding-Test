function solution(n) {
    let answer = [];

    const hanoiTop = (num, one, two, three) => {
        if(num === 1) {
            answer.push([one, three]);
            return;
        }

        hanoiTop(num-1, one, three, two);
        answer.push([one, three]);
        hanoiTop(num-1, two, one, three);       
    }

    hanoiTop(n, 1, 2, 3);
    return answer;
}