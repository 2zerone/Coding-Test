const solution = (rny_string) => {
    return rny_string.split('').map((v) => v === 'm' ? 'rn' : v).join('');
}

const solution2 = (rny_string) => {
    return rny_string.replaceAll(/m/g, "rn");
}

const solution3 = (rny_string) => {
    return rny_string.replaceAll('m', 'rn')
}