function solution(number, k) {
    const stack = [];
    number = number.split('');

    for(let i=0; i<number.length; i++) {
        if(stack.length === 0) {
            stack.push(number[i]);
            continue;
        }

        while(k > 0 && stack[stack.length - 1] < number[i]) {
            stack.pop();
            k--;
        }

        stack.push(number[i]);
    }
    return stack.join('').substring(0, stack.length - k);
}