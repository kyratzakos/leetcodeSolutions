function queryResults(limit: number, queries: number[][]): number[] {
    const balls = new Map<number, number>()
    const totalColors = new Map<number, number>()
    const result: number[] = []

    for (const [x, y] of queries) {
        if (balls.has(x)) {
            const oldColor = balls.get(x)!
            totalColors.set(oldColor, totalColors.get(oldColor)! - 1)
            if (totalColors.get(oldColor) === 0) {
                totalColors.delete(oldColor)
            }
        }
        balls.set(x, y)
        totalColors.set(y, (totalColors.get(y) || 0) + 1)
        result.push(totalColors.size)
    }

    return result
};