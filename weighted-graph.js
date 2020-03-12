class WeightedGraph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = []
        return this.adjacencyList
        } else {
            return "Already added!"
        }
    }

    addEdge(vert1, vert2, weight){
        if(!this.adjacencyList[vert1]){
            this.addVertex(vert1)
        }
        if(!this.adjacencyList[vert2]){
            this.addVertex(vert2)
        }
        this.adjacencyList[vert1].push({node: vert2, weight})
        this.adjacencyList[vert2].push({node: vert1, weight})
        return this.adjacencyList
    }
}