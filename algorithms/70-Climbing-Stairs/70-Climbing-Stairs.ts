function climbStairs(n: number): number {
    if (n === 1) return 1
    let previous1 = 1
    let previous2 = 1

    for (let i = 2; i <= n; i++) {
        const current = previous1 + previous2
        previous2 = previous1
        previous1 = current
    }

    return previous1

};