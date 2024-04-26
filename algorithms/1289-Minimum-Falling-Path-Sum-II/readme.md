# Intuition
To solve the problem of finding the minimum sum of a falling path with non-zero shifts in an $n×n$ matrix, we can utilize dynamic programming. A falling path with non-zero shifts means that for every selected element from the current row, the selected element from the next row cannot be from the same column.

# Approach
1. **Dynamic Programming Definition**: Define a DP table `dp` where `dp[i][j]` represents the minimum sum of a falling path ending at row `i` and column `j`.
2. **Initialization**: Initialize `dp[0][j]` to `grid[0][j]` for all `j`. This sets up the base case where the first row's values are directly taken from the grid.
3. **DP Transition**: For each cell `(i, j)` in the grid, update `dp[i][j]` by considering all possible cells from the previous row except the cell directly above it. This is where the non-zero shifts condition comes into play.
4. **Iterate Over the Grid**: For each row starting from the second row, calculate the minimum path sum for each cell considering the non-zero shift condition.
5. **Find the Minimum Path Sum**: The answer will be the minimum value in the last row of the dp array after considering all rows

# Complexity
- Time complexity: $O(n^3)$. For each element in the grid, we are checking every possible element from the previous row except the one directly above it, which results in $𝑛^2$ operations for each row.

- Space complexity: $O(n^2)$ due to the DP table storing values for each cell

[Code](./1289-Minimum-Falling-Path-Sum-II.ts)