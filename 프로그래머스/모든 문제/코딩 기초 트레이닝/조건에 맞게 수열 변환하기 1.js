const solution = arr => {
    return arr.map(v =>
        v >= 50
        ?
            v%2 === 0
            ?
            v/2
            :
            v
        :
            v%2 === 1
            ?
            v*2
            :
            v
        );
}

const solution2 = (arr) => {
    return arr.map(v => {
        if(v >= 50 && !(v % 2)) return v / 2;
        if(v < 50 && v % 2) return v * 2;
        return v;
    })
}