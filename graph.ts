

class Graph {
    adjacencyList: {};

    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex: string | number){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this.adjacencyList
        }

    addEdge(vertex1: string | number, vertex2: string|number){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
        return this.adjacencyList
    }

    removeEdge(vert1: string | number, vert2: string | number){
        if(this.adjacencyList[vert1]){
          this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(value => value !== vert2)
        }
        if(this.adjacencyList[vert2]){
          this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(value => value !== vert1)
        }
        return this.adjacencyList
      }
      removeVertex(vertex: string | number){
        Object.keys(this.adjacencyList).forEach(element => {
          this.removeEdge(vertex, element)
        })
        this.adjacencyList[vertex] = null
        return this.adjacencyList
    }
    
}
