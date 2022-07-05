function solution(s, n) {
    var answer = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ';

    return s.split('').map(x => answer[answer.indexOf(x) + n]).join('');
}