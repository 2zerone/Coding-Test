function solution(array, commands) {
    let answer = [];

    for(let i=0; i<commands.length; i++) {
        const newArray = array.slice(commands[i][0]-1, commands[i][1]);
        newArray.sort((a, b) => a - b);
        answer.push(newArray[commands[i][2]-1]);
        newArray.splice(0, newArray.length);
    }

    return answer;
}