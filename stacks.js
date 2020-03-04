class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    pop(){
        if(this.size === 0) return null
        let toRemove =this.first
        let newFirst = this.first.next
        this.first = newFirst
        this.size--
        if(this.size === 0){
            this.first =null
            this.last=null
        }
        return toRemove.val
    }

    push(val){
        let unshifted = new Node(val)
        if(!this.first){
            this.first = unshifted
            this.last = unshifted
        } else {
        unshifted.next = this.first
        this.first = unshifted
        }
        return ++this.size
    }

}