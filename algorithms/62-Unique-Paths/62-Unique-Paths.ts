function uniquePaths(m: number, n: number): number {
    let dp = Array(n).fill(1)

    for (let row = 1; row < m; row++) {
        const currentRow = Array(n).fill(1)
        for (let col = 1; col < n; col++) {
            currentRow[col] = currentRow[col - 1] + dp[col]
        }
        dp = currentRow
    }

    return dp[n - 1]
}