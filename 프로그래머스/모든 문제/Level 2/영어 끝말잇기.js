function solution(n, words) {
    var answer = [];

   for(let i=0; i<words.length; i++) {
       if(i === 0) answer.push(words[i]);
       else if (
           !answer.includes(words[i]) &&
           words[i-1][words[i-1].length-1] === words[i][0]) answer.push(words[i]);
       else return [(i%n) + 1, parseInt(i/n) + 1];
   }

    return [0, 0];
}

// 다른 방법 생각해보기