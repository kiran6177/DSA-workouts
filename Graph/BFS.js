const Graph = require('./mod')

function breadthFirstSearch(graph,start){
    const visited = {}
    const queue = [start]
    const arr = []
    while(queue.length){
        const vertex = queue.shift()
        if(!visited[vertex]){
            visited[vertex] = true
            arr.push(vertex)
            for(let child of graph.adjacencyList[vertex]){
                if(!visited[child]){
                    queue.push(child)
                }
            }
        }
    }
    return arr
 };

 const graph = new Graph()
 graph.addEdge("A",'B')
 graph.addEdge("A",'D')
 graph.addEdge("B",'C')
 graph.addEdge("B",'E')
 graph.addEdge("C",'F')
 graph.addEdge("F",'E')
 graph.addEdge("D",'E')
console.log(breadthFirstSearch(graph,"A"))