var reverseWords = function(s) {
    let words = s.split(' ');
    let answer = words.map((word) => word = word.split('').reverse().join('')).join(' ');
    return answer;
};