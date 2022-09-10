var isPalindrome = function(x) {
    let y = Number(x.toString().split('').reverse().join(''));
    if(x - y === 0) return true;
    else return false;
};