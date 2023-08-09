function solution(num_list) {
    const nl = num_list;
    nl[nl.length-1] > nl[nl.length-2]
    ?
    nl.push(nl[nl.length-1] - nl[nl.length-2])
    :
    nl.push(nl[nl.length-1]*2);

    return nl;
}

// other method
function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a>b ? (a-b) : a*2];
}