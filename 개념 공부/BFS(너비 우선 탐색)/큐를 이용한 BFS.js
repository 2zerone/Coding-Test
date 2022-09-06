const bfs = (graph, startNode) => {
    let visited = []; // 탐색한 노드를 담기 위한 배열 생성
    let queue = []; // 탐색을 위한 큐 배열 생성
    
    queue.push(startNode); // 탐색 시작
    
    while(queue.length > 0){ // 큐가 비워질 때까지 반복
      let node = queue.shift(); // 큐의 첫번째 노드를 뽑는다
      if(!visited.includes(node.value)){ // 그 노드를 탐색한 적이 없다면
        visited.push(node); // 탐색 배열에 추가
        queue = [...queue, ...graph[node]]; // 해당 노드와 같은 레벨에 있는 노드들을 담는다
      }
    }
    
    return visited;
  }