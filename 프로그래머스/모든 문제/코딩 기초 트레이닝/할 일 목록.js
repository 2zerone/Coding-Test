const solution = (todo_list, finished) => {
    const answer = [];

    for(let i=0; i<todo_list.length; i++) {
        if(finished[i] === false) answer.push(todo_list[i]);
    }

    return answer;
}

const solutio2 = (todo_list, finished) => {
    return todo_list.filter((v, i) => !finished[i]);
}