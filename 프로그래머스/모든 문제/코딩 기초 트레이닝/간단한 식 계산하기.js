const solution = (binomial) => {
    const expression = binomial.split(' ');
    if (expression[1] === '+') {
        return +expression[0] + +expression[2];
    } else if (expression[1] === '-') {
        return +expression[0] - +expression[2];
    } else {
        return +expression[0] * +expression[2];
    }
}

const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  }
const solution2 = (binomial) => {
    const [a, op, b] = binomial.split(' ');
    return ops[op](+a, +b);
  }


const solution3 = (binomial) => {
    const [a, op, b] = binomial.split(' ');
    return (op === '+') ? +a + +b : (op === '-') ? a-b : a*b;
}