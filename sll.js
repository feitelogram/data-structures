class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val){
        let pushed = new Node(val)
        if(!this.head){
            this.head = pushed
            this.tail = pushed
        } else{
            this.tail.next = pushed
            this.tail = pushed
        }
        this.length++
        return this
    }

    pop(){
        if(this.length === 0) return null
        let begin = this.head
        while(begin.next !== this.tail){
            begin =  begin.next
        }
        let beforeTail = begin
        let returnTail = this.tail.val
        this.tail = beforeTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail= null
        }
        return returnTail
    }

    shift(){
        if(this.length === 0) return null
        let toRemove =this.head
        let newHead= this.head.next
        this.head = newHead
        this.length--
        if(this.length === 0){
            this.head =null
            this.tail=null
        }
        return toRemove.val
    }

    unshift(val){
        let unshifted = new Node(val)
        if(!this.head){
            this.head = unshifted
            this.tail = unshifted
        } else {
        unshifted.next = this.head
        this.head = unshifted
        }
        this.length++
        return this
        }

        get(index){
            if(index < 0 || index >= this.length) return null;
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

        set(index, element){
            let current = this.get(index)
            if(this.current){
                current.val = element
                return true
            } else {
                return false
            }
        } 

        insert(index, element){
            if(index < 0 || index > this.length) return false;
            if(index === this.length) return this.push(element) ? true : false;
            if(index === 0) return this.unshift(element) ? true : false;
            let found = this.get(index-1)
            let foundNext = found.next
            let toBeInserted = new Node(element)
            found.next = toBeInserted
            toBeInserted.next = foundNext
            this.length++
            return true
        }
        
        remove(index){
            if(index < 0 || index > this.length) return null;
            if(index === 0) return this.shift();
            if(index === this.length-1) return this.pop();
            let before = this.get(index-1)
            let returnNode = this.get(index)
            before.next = before.next.next
            this.length--
            return returnNode
        }

        reverse(){
            let node = this.head
            this.head = this.tail
            this.tail = node
            let prev = null
            let next= null
            for(let i = 0; i< this.length; i++){
                next = node.next
                node.next = prev
                prev = node
                node = next
            }
            return this
        }
    }
    


let list = new SinglyLinkedList()
list.push(5)
list.push(6)
list.push(7)
console.log(list)
