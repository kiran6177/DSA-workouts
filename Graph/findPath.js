const Graph = require('./mod')

function findPath(graph,source,destination){
    let visited = {}
    function searchDest(vertex){
        if(vertex === destination){
            return true
        }
        visited[vertex] = true
        for(let child of graph.adjacencyList[vertex]){
            if(!visited[child]){
                return searchDest(child)
            }
        }
        return false
    }
    return searchDest(source)
}

 const graph = new Graph()
 graph.addEdge("A",'B')
 graph.addEdge("A",'D')
 graph.addEdge("B",'C')
 graph.addEdge("C",'F')
 graph.addEdge("F",'E')
 graph.addEdge("D",'E')
console.log(findPath(graph,"A","F"))