const dfs = (graph, startNode) => {
    let visited = []; // 탐색한 노드를 담기 위한 배열 생성
    let stack = []; // 탐색을 위한 스택 배열 생성
    
    stack.push(startNode); // 탐색 시작
    
    while(stack.length > 0){ // 스택이 비워질 때까지 반복
      let node = stack.pop(); // 스택의 가장 마지막 노드를 뽑는다
      if(!visited.includes(node.value)){ // 그 노드를 탐색한 적이 없다면
        visited.push(node); // 탐색 배열에 추가
        stack = [...graph[node], ...stack]; // 해당 노드의 자식 노드들을 스택에 담는다.
      }
    }
    
    return visited;
  }