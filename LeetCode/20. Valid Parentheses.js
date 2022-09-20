var isValid = function(s) {
    let stack = [];
    var obj = {
        "]": "[",
        "}": "{",
        ")": "(",
    };

    for(var i = 0; i < s.length; i++) {
        if(s[i] === "[" || s[i] === "{" || s[i] === "(") {
            stack.push(s[i]);
        } else {
            var key = stack.pop();
            if(maps[key] !== s[i]) {
                return false;
            }
        }
    }
    if(!stack.length) {
        return true;
    }
    return false;
};