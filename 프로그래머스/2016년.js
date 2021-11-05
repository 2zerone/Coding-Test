const solution = (a, b) => {
    const day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let count = 0;
    for (let i = 0; i < a - 1; i++) {
        count += date[i];
    }
    count += b;

    return day[count % 7];
}