var longestCommonPrefix = function(strs) {
    let result = '';
    if(strs.length <1) return result;
    const first = strs[0]; // flower
    for(let i = 0; i<first.length ; i++){
        const c = first[i]; // f, l, o, w, e, r 
        
        for(let j = 1;j<strs.length;j++){
            if(strs[j][i] !== c) return result; // f"l"ow, fl"o"w
        }
        result += c;
    }
    return result;
};

var longestCommonPrefix = function(strs) {
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
        // console.log(strs[i+2][j]);
          if (strs[i][j] == strs[i + 1][j] && strs[i + 1][j] ==strs[i + 2][j]) {
            return (strs[i][j]);

          } else {
            return "0";
          }
        }
     }
};