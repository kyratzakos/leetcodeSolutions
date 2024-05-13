# Intuition
To solve this problem where the goal is to maximize the score of a binary matrix by toggling any rows or columns, it's important to understand the influence of toggles on the matrix's binary representation and the final score.

# Approach
2. Row Toggles: First, ensure that the leftmost bit of every row is `1`. If it's `0`, toggle the row.
2. Column Toggles: Then, for each column, count the number of `0`s and `1`s. If there are more `0`s than `1`s in any column, toggle that column.

# Complexity
- Time complexity:
$O(m×n)$, where $m$ is the number of rows and $n$ is the number of columns. We're processing each element of the matrix a constant number of times.

- Space complexity:
$O(1)$, not counting the input size, as we're using a constant amount of additional space.

[Code](./861-Score-After-Flipping-Matrix.ts)