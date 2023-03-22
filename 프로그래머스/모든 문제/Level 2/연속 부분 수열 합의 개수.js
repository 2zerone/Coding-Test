function solution(elements) {
    const set = new Set();
    const N = elements.length;
  
    for (let len = 1; len <= N; len++) {
      let rear = 0;
      let sum = 0;
  
      for (let front = 0; front < N; front++) {
        if (front === 0) {
          while (rear < len) {
            sum += elements[rear++];
          }
        }
        else {
          sum -= elements[front - 1];
          if (rear === N) rear = 0;
          sum += elements[rear++];
        }
        
        set.add(sum);
      }
    }
  
    return set.size;
  }