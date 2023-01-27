function solution(numbers) {
    const num = {
        'zero' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
    };

    return Number(numbers.match(/zero|one|two|three|four|five|six|seven|eight|nine/g)
                  .map(v => num[v]).join(''));

}