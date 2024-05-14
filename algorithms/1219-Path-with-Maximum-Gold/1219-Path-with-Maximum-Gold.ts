function getMaximumGold(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length

    function dfs(x: number, y: number): number {
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 0) {
            return 0
        }

        const gold = grid[x][y]
        grid[x][y] = 0

        const up = dfs(x - 1, y)
        const down = dfs(x + 1, y)
        const left = dfs(x, y - 1)
        const right = dfs(x, y + 1)

        grid[x][y] = gold

        return gold + Math.max(up, down, left, right)
    }

    let maxGold = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                maxGold = Math.max(maxGold, dfs(i, j))
            }
        }
    }

    return maxGold
};