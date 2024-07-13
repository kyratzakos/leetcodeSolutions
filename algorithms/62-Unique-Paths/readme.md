# Intuition
This approach is an efficient way to solve the problem using dynamic programming with optimized space complexity. Instead of maintaining a full 2D array, we only keep track of the current row and the previous row, which reduces the space complexity to $O(n)$.

# Approach
1. Initialization: Start with an array `dp` representing the first row, initialized with all values set to 1. This represents the number of ways to reach each cell in the first row.
2. Dynamic Programming Transition:
   - Iterate through each row starting from the second row.
   - For each row, initialize a `currentRow` array also with all values set to 1.
   - Update `currentRow[col]` as the sum of `currentRow[col - 1]` (left cell in the current row) and `dp[col]` (above cell in the previous row).
3. Update and Result:
   - After updating all columns in the current row, set `dp` to `currentRow`.
   - The last element of `dp` will contain the number of unique paths to the bottom-right corner after processing all rows.


# Complexity
- Time complexity:
$O(m×n)$, where $m$ is the number of rows and $n$ is the number of columns. You iterate through each cell once.

- Space complexity:
$O(n)$, since we only store two rows (the current row and the previous row) of size `n`.

[Code](./62-Unique-Paths.ts)