function tribonacci(n: number): number {
    if(n < 3) {
        if(n === 2 || n === 1) return 1
        return 0
    }

    let t0 = 0, t1 = 1, t2 = 1
    let current = 0

    for(let i = 3; i <= n; i++) {
        current = t0 + t1 + t2
        t0 = t1
        t1 = t2
        t2 = current
    }

    return current
};