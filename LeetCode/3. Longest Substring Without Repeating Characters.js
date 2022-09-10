var lengthOfLongestSubstring = function(s) {
    if(s.length < 2) return s.length;
    
    let current = '';
    let max = 0;
    
    for(let i=0; i<s.length; i++) {
        current = current.substring(current.indexOf(s[i]) + 1);
        current += s[i];
        
        if(current.length > max) max = current.length;
    }
    
    return max;
};