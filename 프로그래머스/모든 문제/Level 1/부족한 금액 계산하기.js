function solution(price, money, count) {
    var answer = 0;
    let totalmoney = 0;

    for(let i=1; i<=count; i++) {
        totalmoney += price * i
    }

    if(totalmoney < money) answer = 0;
    else answer = (totalmoney - money)

    return answer;
}