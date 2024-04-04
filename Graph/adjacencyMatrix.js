class Graph{
    constructor(numVertices){
        this.numVertices = numVertices
        this.adjacencyMatrix = new Array(numVertices).fill(null).map(() => new Array(numVertices).fill(0))
    }
    addEdge(vertex1,vertex2){
        this.adjacencyMatrix[vertex1][vertex2] = 1;
        this.adjacencyMatrix[vertex2][vertex1] = 1;
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyMatrix[vertex1][vertex2] = 0;
        this.adjacencyMatrix[vertex2][vertex1] = 0;
    }
    hasEdge(vertex1,vertex2){
        return this.adjacencyMatrix[vertex1][vertex2] == 1
    }
    display(){
        for(let i = 0 ; i < this.numVertices ; i++){
            console.log(i +"=>"+ [...this.adjacencyMatrix[i]])
        }
    }
}
const gra = new Graph(6)
gra.addEdge(0,3)
gra.addEdge(5,3)
gra.addEdge(0,4)
gra.addEdge(0,2)
gra.addEdge(1,3)
gra.display()
console.log(gra.hasEdge(0,3))