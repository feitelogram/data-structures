class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        this.length++
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode 
        }
        return this
    }

    pop() {
        if(!this.head) return null;
        let oldTail = this.tail
        if(this.length === 1){
            this.head=null
            this.tail=null
        } else {
        this.tail = oldTail.prev
        oldTail.prev = null
        this.tail.next = null
        }
        this.length--
        return oldTail 
    }

    shift() {
        if(!this.head) return null;
        let oldHead= this.head
        if(this.length === 1){
            this.head=null
            this.tail=null
        } else {
            this.head = oldHead.next
            oldHead.next = null
            this.head.prev = null
        }
        this.length--
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        } else {
        let oldHead = this.head
        newNode.next = oldHead
        oldHead.prev = newNode
        this.head = newNode
        }
        this.length++
        return this
    }

    getFromBeginning(index){
        let counter = 0
        let current = this.head
        while(counter < this.length){
          if(counter === index){
            return current
          } else {
            current = current.next
            counter++
          }
        }
    }

    getFromEnd(index) {
        let counter = this.length-1
        let current = this.tail
        while(counter > 0){
          if(counter === index){
            return current
          } else {
            current = current.prev
            counter--
          }
        }
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        if(index < Math.floor(this.length/2)){
            return this.getFromBeginning(index)
        } else {
            return this.getFromEnd(index)
        }
    }

    set(index, val) {
        let found = this.get(index)
        if(!!found){
        found.val = val
        return true
        }
    }

    insert(index, val){
        if(index < 0 || index > this.length) return null;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        let before = this.get(index-1)
        let toBeInserted = new Node(val)
        toBeInserted.next = before.next
        toBeInserted.prev = before
        before.next.prev = toBeInserted
        before.next = toBeInserted
        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop()
        let found = this.get(index)
        found.prev.next = found.next
        found.next.prev = found.prev
        found.next= null
        found.prev = null
        this.length--
        return found
    }


}