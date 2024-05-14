# Intuition
To solve the problem of collecting the maximum amount of gold from a given grid under the specified conditions, we can use a Depth-First Search (DFS) approach. The DFS approach will help us explore all possible paths starting from any cell with gold and calculate the maximum gold that can be collected along each path.

# Approach
1. Depth-First Search (DFS): Implement DFS to explore all possible paths from a starting cell. During the DFS traversal, we will:
   - Collect gold from the current cell.
   - Mark the cell as visited (e.g., set it to 0) to avoid revisiting.
   - Move to adjacent cells (up, down, left, right) if they contain gold.
   - Backtrack by restoring the cell's original gold value after exploring all paths from the cell.
2. Start DFS from Each Gold Cell: Iterate through all cells in the grid, and if a cell contains gold, initiate DFS from that cell to find the maximum gold that can be collected starting from that cell.
3. Track Maximum Gold: Keep track of the maximum gold collected from any starting position.

# Complexity
- Time complexity:
$O(m×n×4^k)$, where $m$ is the number of rows, $n$ is the number of columns, and $k$ is the maximum number of steps in the longest path. The DFS can potentially explore all cells multiple times.

- Space complexity:
$O(k)$ for the recursion stack, where $k$ is the maximum depth of the DFS traversal.

[Code](./1219-Path-with-Maximum-Gold.ts)