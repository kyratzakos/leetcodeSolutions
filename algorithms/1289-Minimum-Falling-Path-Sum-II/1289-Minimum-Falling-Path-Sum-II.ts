function minFallingPathSum(grid: number[][]): number {
    const n = grid.length
    let dp = Array.from({ length: n }, () => Array(n).fill(Infinity))

    for (let i = 0; i < n; i++) {
        dp[0][i] = grid[0][i]
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (k !== j) {
                    dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + grid[i][j])
                }
            }
        }
    }

    return Math.min(...dp[n - 1])
}
