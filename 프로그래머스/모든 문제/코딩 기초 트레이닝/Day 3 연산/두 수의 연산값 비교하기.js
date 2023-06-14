function solution(a, b) {
    return a.toString()+b >= 2*a*b 
    ?
    +(a.toString()+b)
    :
    2*a*b;
}