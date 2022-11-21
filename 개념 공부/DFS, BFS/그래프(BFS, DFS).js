const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'G', 'H', 'I'],
    D: ['B', 'E', 'F'],
    E: ['D'],
    F: ['D'],
    G: ['C'],
    H: ['C'],
    I: ['C', 'J'],
    J: ['I']
}

// BFS
const BFS = (graph, startNode) => {
    const visited = []; // 탐색 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while(needVisit.length !== 0) { // 탐색해야 할 노드가 남아있으면
        const node = needVisit.shift(); // queue라서 FIFO, shift 활용
        if (!visited.includes(node)) { // 해당 노드 탐색된 적 없으면
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visited;
}

console.log(BFS(graph, "A"));
// ["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]

// DFS
const DFS = (graph, startNode) => {
    const visited = [];
    let needVisit = [];

    needVisit.push(startNode);

    while(needVisit.length !== 0) {
        const node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...graph[node], ...needVisit];
        }
    }
    return visited;
}

console.log(DFS(graph, "A"));
// ["A", "B", "D", "E", "F", "C", "G", "H", "I", "J"]