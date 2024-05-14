function largestLocal(grid: number[][]): number[][] {

    let marginSize = 3
    let maxLocalArray = []

    for (let x = 0; x < grid.length - marginSize + 1; x++) {
        maxLocalArray.push([])
        for (let y = 0; y < grid.length - marginSize + 1; y++) {
            let maxValue = Number.MIN_SAFE_INTEGER
            for (let i = x; i < x + 3; i++) {
                for (let j = y; j < y + 3; j++) {
                    maxValue = Math.max(maxValue, grid[i][j])
                }
            }
            maxLocalArray[maxLocalArray.length - 1].push(maxValue)
        }
    }

    return maxLocalArray
};