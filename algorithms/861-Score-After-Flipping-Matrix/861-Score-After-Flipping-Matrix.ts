function matrixScore(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length

    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < n; j++) {
                grid[i][j] = 1 - grid[i][j]
            }
        }
    }

    for (let j = 0; j < n; j++) {
        let countOne = 0
        for (let i = 0; i < m; i++) {
            if (grid[i][j] === 1) {
                countOne++
            }
        }
        if (countOne < m / 2) {
            for (let i = 0; i < m; i++) {
                grid[i][j] = 1 - grid[i][j]
            }
        }
    }

    let score = 0
    for (let i = 0; i < m; i++) {
        let rowValue = 0
        for (let j = 0; j < n; j++) {
            rowValue = rowValue * 2 + grid[i][j]
        }
        score += rowValue
    }

    return score
};