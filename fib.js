const fib = (value) => {
    if(value <= 2) return 1;
    return fib(value -1) + fib(value-2)
}

const memoFib = (value, memo = []) => {
    if(memo[value] !== null) return memo[value];
    if(value <= 2) return 1;
    let result = fib(value-1, memo) + fib(value-2, memo)
    memo[value] = result
    return result
}

const tabFib = (value) => {
    if(value <= 2) return 1;
    let fibNums = [0,1,1]
    for(let i = 3; i < value; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[value]
} 