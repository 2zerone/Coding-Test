// solution(1)
const solution = (str_list, ex) => {
    let result = '';
    for(let x of str_list) {
        if(!(x.includes(ex))) result+=x;
    }

    return result;
}

// solution(2)
const solution2 = (str_list, ex) => str_list.filter(v => !v.includes(ex)).join('');
