// ======================================GRAPH======================================

class Graph {
  constructor() {
    this.vertices = [];

    this.edges = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);

    this.edges[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);

    this.edges[vertex2].push(vertex1);
  }

  bfs(startVertex) {
    const visited = {};

    const queue = [];

    visited[startVertex] = true;

    queue.push(startVertex);

    while (queue.length > 0) {
      const vertex = queue.shift();

      console.log(vertex);

      this.edges[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
  }

  dfs(startVertex) {
    const visited = {};

    const dfsHelper = (vertex) => {
      visited[vertex] = true;

      console.log(vertex);

      this.edges[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      });
    };

    dfsHelper(startVertex);
  }
}

// ==========================TEST CASES==========================

const graph = new Graph();

// add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");
graph.addVertex("I");
graph.addVertex("J");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("C", "G");
graph.addEdge("D", "J");
graph.addEdge("E", "H");
graph.addEdge("F", "H");
graph.addEdge("G", "I");
// perform BFS
console.log("BFS:");
graph.bfs("A");

// perform DFS
console.log("DFS:");
graph.dfs("A");
