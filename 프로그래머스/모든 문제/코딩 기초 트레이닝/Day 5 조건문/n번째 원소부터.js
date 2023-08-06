function solution(num_list, n) {
  return num_list.slice(n - 1);
}

// 다른 접근
function solution(num_list, n) {
    for(let i=0; i<n-1; i++) num_list.shift();
    return num_list;
}