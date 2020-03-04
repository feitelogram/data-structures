// const bubbleSort = (arr) => {
//   let noSwaps;
//   let count = 0
//   for(let i = arr.length; i > 0; i-- ){
//     noSwaps = true
//     for(let j= 0; j < i-1; j++){
//       if(arr[j] > arr[j+1]){
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//         noSwaps = false
//         count++
//     } 
//   }
//  if(noSwaps) break;
// }
// console.log(count)
//  return arr
// }

// bubbleSort([1,5,8,7,2, 35, 3, 276, 9])

// const selectionSort = (arr) => {
 
  // for(let i = 0; i<arr.length; i++){
  //    let min = i
  //   for(j = i+1; j < arr.length; j++){
  //     if(arr[min] > arr[j]){
  //       min = j
  //     }
  //   }
  //   if(i !== min){
  //     [arr[i], arr[min]] = [arr[min], arr[i]]
  //   }
  //   }
  //     return arr
  // }



  let arr = [80, 28, 4, 6, 18, 208, 54, 8]
  let arr1 = [456, 32, 44, 1, 23, 54, 22, 17]
  
  // selectionSort(arr)
  
  // const insertionSort = (arr) => {
  //   let j;
  //   for(i =1; i < arr.length; i++){
  //     let current = arr[i]
  //     for(j = i-1; j>=0 && arr[j]>current; j--){
  //       arr[j+1] = arr[j] 
  //     }
  //     arr[j+1] = current
  //   }
  //   return arr
  // }
  
  // insertionSort(arr)
  
  // const mergeSorted = (arr1, arr2) => {
  //   let results = []
  //   let i = 0;
  //   let j =0;
  //   while(i < arr1.length && j < arr2.length){
  //     if(arr1[i] < arr2[j]){
  //       results.push(arr1[i])
  //       i++
  //     } else {
  //       results.push(arr2[j])
  //       j++
  //     }
  //   }
  //   while(i<arr1.length){
  //     results.push(arr1[i])
  //   }
  //    while(j<arr2.length){
  //     results.push(arr2[j])
  //   }
  //   return results
  // }
  
  // mergeSorted([1,2,5,10], [])
  
  // const pivot = (arr, startIndex = 0, endIndex = arr.length+1) => {
  //   let point = arr[startIndex]
  //   let pointIndex = startIndex
  //   for(let i = startIndex + 1; i< arr.length; i++){
  //     if(point > arr[i]){
  //       pointIndex++
  //       let temp = arr[i]
  //       arr[i] = arr[pointIndex]
  //       arr[pointIndex] = temp
  //     }
  //   }
  //   [arr[startIndex], arr[pointIndex]] = [arr[pointIndex], arr[startIndex]]
  //   console.log(arr)
  //   return pointIndex
  // }
  
  // // 
  
  // const quicklySort = (arr) => {
  //   let pivot = pivot(arr)
  //   let left = arr.slice(0,pivot)
  //   let right = arr.slice(pivot)
  // }
  
  const getDigit = (num, place) => {
  return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10
  }
  
  const digitCount = (num) => {
  let str = `${num}`
  return str.length
  }
  
  const mostDigits = (arr) => {
    let mostDigits = 0;
    for(let i = 0; i<arr.length; i++){
      if(digitCount(arr[i]) > mostDigits){
        mostDigits = digitCount(arr[i])
      }
    }
    return mostDigits
  }
  
  // mostDigits([1,22,345,4445])
  
  const radixSort = (arr) => {
   
    let numTimes = mostDigits(arr)
    for(let k = 0; k<numTimes; k++){
      let digitBuckets = Array.from({length: 10}, () => [])
      for(let i = 0; i<arr.length; i++){
        let digit = getDigit(arr[i], k)
        digitBuckets[digit].push(arr[i])
        
      }
      arr = [].concat(...digitBuckets)
    }
    return arr
  }
  
  radixSort(arr)