function solution(numbers) {

    const initValue = 45;

    const totalResult = numbers.reduce((initialValue, currentValue) => {
        return initialValue - currentValue;
    }, initValue)

    return totalResult

    // return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

