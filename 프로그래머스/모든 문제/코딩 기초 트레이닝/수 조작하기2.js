// Intuitive Code
const solution = (numLog) => {
    const obj = {
        '1' : 'w',
        '-1' : 's',
        '10' : 'd',
        '-10' : 'a'
    }

    const arr = [];
    for(let i=0; i<numLog.length-1; i++) {
        arr.push(numLog[i+1] - numLog[i]);
    }

    return arr.map((v) => obj[v]).join('');
}

// Summary Code
const solution2 = (numLog) => {
    const obj = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => {
        return obj[v - numLog[i]]
    }).join('')
}
