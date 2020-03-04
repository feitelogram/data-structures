class Node{
    constructor(val, priority){
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor(){
        this.values = []
    }

        // UTILITY METHODS
        _swap (idxA, idxB) {
            [this.values[idxA], this.values[idxB]] = [this.values[idxB], this.values[idxA]];
          }
          _parentIdx (childIdx) {
            return Math.floor((childIdx - 1) / 2);
          }
          _childrenIndices (parentIdx) {
            return [2 * parentIdx + 1, 2 * parentIdx + 2];
          }
          enqueue (val, priority) {
            let newNode = new Node(val, priority)
            this.values.push(newNode);                        // add new value to the end
            let currentIdx = this.values.length - 1;      // initialize currentIdx at the last index value
            while (currentIdx && this.values[currentIdx].priority < this.values[this._parentIdx(currentIdx)].priority) {
              this._swap(currentIdx, this._parentIdx(currentIdx));
              currentIdx = this._parentIdx(currentIdx);
            }
            return this; 
    }

    dequeue() {
              if (!this.values.length) return null;                     // edge case: empty heap
              if (this.values.length === 1) return this.values.pop();   // edge case: heap only has 1 element
              const output = this.values[0];                            // save the max value (to be returned later)
              this.values[0] = this.values.pop();                       // move the last value into the root position
              let currentIdx = 0;                                       // initialize currentIdx at the root position
              let [leftIdx, rightIdx] = this._childrenIndices(0);       // initialize leftIdx and rightIdx based on currentIdx, 0
              while (leftIdx < this.values.length) {                    // while a left child exists
                const smallerChildIdx = rightIdx < this.values.length && this.values[rightIdx].priority < this.values[leftIdx].priority
                  ? rightIdx    // if rightIdx is both in bounds AND its element is bigger than that at leftIdx, it is biggerChildIdx
                  : leftIdx;    // otherwise, biggerChildIdx is leftIdx
                if (this.values[currentIdx].priority > this.values[smallerChildIdx].priority) {    // if current value is less than the bigger child...
                  this._swap(currentIdx, smallerChildIdx);                       // ...then swap, and update the pointers
                  currentIdx =smallerChildIdx;                                  // (currentIdx, leftIdx, and rightIdx)
                  [leftIdx, rightIdx] = this._childrenIndices(currentIdx);
                } else {                                                        // if current value is NOT less than the bigger child...
                  break;                                                        // ...no more swaps. break out of the loop.
                }
              }
              return output;      // return the max value which you saved at the very beginning
            }


}

// class PriorityQueue {
//     constructor () {
//       this.values = [];
//     }
    // // UTILITY METHODS
    // _swap (idxA, idxB) {
    //   [this.values[idxA], this.values[idxB]] = [this.values[idxB], this.values[idxA]];
    // }
    // _parentIdx (childIdx) {
    //   return Math.floor((childIdx - 1) / 2);
    // }
    // _childrenIndices (parentIdx) {
    //   return [2 * parentIdx + 1, 2 * parentIdx + 2];
    // }
    // insert (val) {
    //   this.values.push(val);                        // add new value to the end
    //   let currentIdx = this.values.length - 1;      // initialize currentIdx at the last index value
    //   while (currentIdx && this.values[currentIdx] > this.values[this._parentIdx(currentIdx)]) {
    //     this._swap(currentIdx, this._parentIdx(currentIdx));
    //     currentIdx = this._parentIdx(currentIdx);
    //   }
    //   return this;    // we only need this line if we want to support chaining a bunch of inserts
//     }
//     extract () {
//       if (!this.values.length) return null;                     // edge case: empty heap
//       if (this.values.length === 1) return this.values.pop();   // edge case: heap only has 1 element
//       const output = this.values[0];                            // save the max value (to be returned later)
//       this.values[0] = this.values.pop();                       // move the last value into the root position
//       let currentIdx = 0;                                       // initialize currentIdx at the root position
//       let [leftIdx, rightIdx] = this._childrenIndices(0);       // initialize leftIdx and rightIdx based on currentIdx, 0
//       while (leftIdx < this.values.length) {                    // while a left child exists
//         const biggerChildIdx = rightIdx < this.values.length && this.values[rightIdx] > this.values[leftIdx]
//           ? rightIdx    // if rightIdx is both in bounds AND its element is bigger than that at leftIdx, it is biggerChildIdx
//           : leftIdx;    // otherwise, biggerChildIdx is leftIdx
//         if (this.values[currentIdx] < this.values[biggerChildIdx]) {    // if current value is less than the bigger child...
//           this._swap(currentIdx, biggerChildIdx);                       // ...then swap, and update the pointers
//           currentIdx = biggerChildIdx;                                  // (currentIdx, leftIdx, and rightIdx)
//           [leftIdx, rightIdx] = this._childrenIndices(currentIdx);
//         } else {                                                        // if current value is NOT less than the bigger child...
//           break;                                                        // ...no more swaps. break out of the loop.
//         }
//       }
//       return output;      // return the max value which you saved at the very beginning
//     }
//   }