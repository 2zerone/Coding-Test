var isValid = function(s) {
    const stack = [];
    
    for(let x of s) {
        const num = stack[stack.length - 1];
        
        if(x === '(' || x === '[' || x === '{') stack.push(x);
        else if(x === ')' && num === '(' && stack.length !== 0) stack.pop();
        else if(x === ']' && num === '[' && stack.length !== 0) stack.pop();
        else if(x === '}' && num === '{' && stack.length !== 0) stack.pop();
        else return false;
    }
    
    if(stack.length === 0) return true;
    else return false;
};