function solution(citations) {
    let answer = 0;
    let newCitations = citations.sort((a, b) => b - a);

    while(answer <= newCitations[answer] - 1) answer++
    return answer;
}