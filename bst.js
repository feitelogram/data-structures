class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root=null
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
          this.root = newNode;
          return this;
        } else {
          let current = this.root;
          while (true) {
            if (val < current.val) {
              if (current.left == null) {
                current.left = newNode;
                return this
              } else {current = current.left}
            } else if (val > current.val) {
              if (current.right == null) {
                current.right = newNode;
                return this;
              } else {current = current.right}
            }
          }
        }
    }
    
    find(val){
        if (!this.root) return null;
        if(this.root.val === val) return this.root;
        let current = this.root
        while(true){
            if(val > current.val && current.right) {
                current = current.right
            } else if(val < current.val && current.left) {
                current = current.left
            } else if(val === current.val) {
                return current
            } else {
                return null;
            }
        }
    }

    bfs(){
        let queue = []
        let returnList = []
        queue.push(this.root)
        while(queue.length > 0){
            let checked = queue.shift()
            returnList.push(checked)
            if(checked.left) queue.push(checked.left);
            if(checked.right) queue.push(checked.right);
        }
        return returnList
    }

    dfsPreOrder(){
        let visited = []
        let current = this.root
        const helper = (node) => {
            visited.push(node.val)
            if(node.left) helper(node.left);
            if(node.right) helper(node.right)
        }
        helper(current)
        return visited
    }

    dfsPostOrder(){
        let visited = []
        let current = this.root
        const helper = (node) => {
            if(node.left) helper(node.left);
            if(node.right) helper(node.right)
            visited.push(node.val)
        }
        helper(current)
        return visited
    }

    dfsInOrder(){
        let visited = []
        const helper = (node) => {
            node.left && helper(node.left);
            visited.push(node.val)
            node.right && helper(node.right)
        }
        helper(this.root)
        return visited
    }
    }

}

let tree = new BST
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)
