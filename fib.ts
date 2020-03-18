const fib = (value: number) => {
    if(value <= 2) return 1;
    return fib(value-1) + fib(value-2)
}