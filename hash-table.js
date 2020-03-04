class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0)- 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value){
        let hashed = this.hash(key)
        if(!this.keyMap[hashed]){
            this.keyMap[hashed] = []
        }
        this.keyMap[hashed].push([key, value])
        return this.keyMap[hashed]
    }

    get(key){
        let hashed = this.hash(key)
        if(!this.keyMap[hashed]) return null;
        let looper = this.keyMap[hashed]
        let returnArr = looper.find(element => element[0] === key)
        return returnArr ? returnArr : null
    }
}

let ht = new HashTable()
ht.set("hello world", "goodbye")