class Graph {
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

    addEdge(vert1, vert2){
        if(!this.adjacencyList[vert1]){
            this.addVertex(vert1)
        }
        if(!this.adjacencyList[vert2]){
            this.addVertex(vert2)
        }
        this.adjacencyList[vert1].push(vert2)
        this.adjacencyList[vert2].push(vert1)
        return this.adjacencyList
    }

    removeEdge(vert1, vert2){
        if(this.adjacencyList[vert1]){
          this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(value => value !== vert2)
        }
        if(this.adjacencyList[vert2]){
          this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(value => value !== vert1)
        }
        return this.adjacencyList
      }
      removeVertex(vertex){
        Object.keys(this.adjacencyList.forEach(element => {
          this.removeEdge(vertex, element)
        }))
        this.adjacencyList[vertex] = null
        return this.adjacencyList
    }    

}