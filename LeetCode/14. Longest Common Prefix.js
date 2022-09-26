var longestCommonPrefix = function(strs) {
  let answer = '';
  
  if(strs.length < 1) return answer;
  const firstStr = strs[0];
  
  for(let i=0; i<firstStr.length; i++) {
      const initial = firstStr[i];
      
      for(let j=0; j<strs.length; j++) {
          if(strs[j][i] !== initial) return answer;
      }
      
      answer += initial;
  }
  
  return answer;
};