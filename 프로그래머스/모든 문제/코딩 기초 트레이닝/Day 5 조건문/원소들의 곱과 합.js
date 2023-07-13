function solution(num_list) {
    const mul = num_list.reduce((acc, v) => acc * v, 1);
    const add = num_list.reduce((acc, v) => acc + v, 0);
    
    return mul < add*add ? 1 : 0;
}