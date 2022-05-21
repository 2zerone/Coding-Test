function solution(seoul) {
    var answer = '';

    for(let i=0; i<seoul.length; i++) {
        if(seoul[i] === 'Kim') answer = '김서방은 ' + `${i}` + '에 있다'
    }

    return answer;
}

// 조금 더 간단하게 정리하자면

function solution(seoul) {
    let find_kim = seoul.indexOf('Kim');
    return '김서방은 ' + find_kim + '에 있다';
}