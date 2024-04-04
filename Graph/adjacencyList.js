class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2); //undirected Graph
    this.adjacencyList[vertex2].add(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1].delete(vertex2)
    this.adjacencyList[vertex2].delete(vertex1)
  }
  removeVertex(vertex){
    if(!this.adjacencyList[vertex]){
        return
    }
    for(let adjacentVertex of this.adjacencyList[vertex]){
        this.removeEdge(adjacentVertex,vertex)
    }
    delete this.adjacencyList[vertex]
  }
  breadthFirstTraversal(startIndex){
    let visited = {}
    let queue = [startIndex]
    visited[startIndex] = true
    while (queue.length) {
        let vertex = queue.shift()
        console.log(vertex)
        for(let child of this.adjacencyList[vertex]){
            if(!visited[child]){
                visited[child] = true
                queue.push(child)
            }
        }
    }
  }
  depthFirstIterativePreorder(startIndex) {
    let visited = {};
    let stack = [startIndex];
    while (stack.length){
      const vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        console.log(vertex);
        for(let neighbor of [...this.adjacencyList[vertex]].reverse()){
          stack.push(neighbor)
        }
      }
    }
  }
  depthFirstIterativePostorder(startIndex) {
    let visited = {};
    let stack = [];   
  
    stack.push(startIndex);
  
    while (stack.length) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        stack.push(vertex);
        for (let neighbor of [...this.adjacencyList[vertex]].reverse()) {
          if (!visited[neighbor]) {
            stack.push(neighbor); 
          }
        }
      } else {
        console.log(vertex);
      }
    }
  }
depthFirstTraversalPreorder(startIndex) {
    let visited = {};
    const dfsPreorder = (vertex) => {
      if (visited[vertex]){
         return;
        }
      visited[vertex] = true;
      console.log(vertex);
      for (let neighbor of this.adjacencyList[vertex]) {
        dfsPreorder(neighbor);
      }
    };
    dfsPreorder(startIndex);
  }

  depthFirstTraversalPostorder(startIndex) {
    let visited = {};
    const dfsPostorder = (vertex) => {
      if (visited[vertex]) {
        return
    };
      visited[vertex] = true;
      for (let neighbor of this.adjacencyList[vertex]) {
        dfsPostorder(neighbor);
      }
      console.log(vertex); 
    };
    dfsPostorder(startIndex);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "=>" + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addEdge(9,6)
graph.addEdge(9,12)
graph.addEdge(6,1)
graph.addEdge(6,4)
graph.addEdge(12,34)
graph.addEdge(12,45)

graph.breadthFirstTraversal(9)
// console.log("------");
// graph.depthFirstTraversalPreorder(9)
// console.log("------");
// graph.depthFirstTraversalPostorder(9)
console.log("------");
graph.depthFirstIterativePreorder(9)
console.log("------");
graph.depthFirstIterativePostorder(9)
