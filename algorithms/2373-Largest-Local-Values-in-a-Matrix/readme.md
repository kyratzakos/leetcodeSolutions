# Intuition
To solve this problem, the objective is to compute the largest value in every 3x3 sub-matrix of a given `n x n` matrix and construct a new matrix of the results. The resulting matrix will have dimensions `(n-2) x (n-2)` because the edges of the original matrix do not allow a full 3x3 grid around them.

# Approach
1. Iterate through the matrix: Loop through the matrix such that for each element `grid[i][j]`, you have a valid 3x3 sub-matrix centered around it. This means `i` and `j` should vary from 1 to `n-2`.
2. Find the maximum in 3x3 sub-matrix: For each position `(i, j)`, check all elements in the 3x3 sub-matrix centered at `(i, j)` to find the maximum.
3. Store the maximum: Assign the maximum value found to the new matrix `maxLocalArray[i-1][j-1]`.

# Complexity
- Time complexity:
$O((n−2)^2 ×3^2 )=O(n^2)$ since for each cell in the `(n-2)x(n-2)` matrix, we're performing a constant amount of work (9 comparisons).

- Space complexity:
$O((n−2)^2)$ for storing the maxLocal matrix, which is the output matrix of size `(n-2) x (n-2)`.

[Code](./2373-Largest-Local-Values-in-a-Matrix.ts)