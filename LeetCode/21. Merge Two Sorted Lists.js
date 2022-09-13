// leetcode 에서만 실행이 안됨, 원인 찾아보기
var mergeTwoLists = function(list1, list2) {
    for(let i=0; i<list1.length; i++) {
        list2.push(list1[i]);
    }
    
    return list2.sort((a, b) => a - b);
};