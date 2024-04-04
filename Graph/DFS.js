const Graph = require('./mod')
function DFS(graph,start){
    const visited = {}
    const stack = []
    stack.push(start)
    let arr = []
    while(stack.length){
        const vertex = stack.pop()
        if(!visited[vertex]){
            visited[vertex] = true
            arr.push(vertex)
            for(let child of [...graph.adjacencyList[vertex]].reverse()){
                stack.push(child)
            }
        }
    }
    return arr
}
const graph = new Graph()
graph.addEdge("A",'B')
graph.addEdge("A",'D')
graph.addEdge("B",'C')
graph.addEdge("B",'E')
graph.addEdge("C",'F')
graph.addEdge("F",'E')
graph.addEdge("D",'E')
console.log(DFS(graph,"A"))