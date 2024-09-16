export const tspBruteForce = (distances) => {
    const n = distances.length;
    let shortestPath = null;
    let minLength = Infinity;
  
    const permute = (path, visited) => {
      if (path.length === n) {
        let currentLength = 0;
        for (let i = 0; i < n - 1; i++) {
          currentLength += distances[path[i]][path[i + 1]];
        }
        currentLength += distances[path[n - 1]][path[0]]; // Return to start
        if (currentLength < minLength) {
          minLength = currentLength;
          shortestPath = path;
        }
        return;
      }
  
      for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          visited[i] = true;
          permute([...path, i], visited);
          visited[i] = false;
        }
      }
    };
  
    permute([], Array(n).fill(false));
    return { shortestPath, minLength };
  };
  