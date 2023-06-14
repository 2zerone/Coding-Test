function solution(a, b) {
    return a.toString()+b >= b.toString()+a 
        ? 
        +(a.toString()+b)
        :
        +(b.toString()+a);
}