# Intuition
To solve this problem, we need to find the maximum safeness factor for all paths leading from the top-left corner to the bottom-right corner of a 2D grid. The safeness factor of a path is the minimum Manhattan distance from any cell in the path to any thief in the grid.

# Approach
1. Compute Distance to Thieves: First, we'll compute the minimum Manhattan distance from each cell to any thief in the grid. This can be done using multi-source Breadth-First Search (BFS) starting from all cells containing thieves.
2. Find Maximum Safeness Path: Use a modified version of Dijkstra's algorithm to find the path from `(0, 0)` to `(n - 1, n - 1)` that maximizes the minimum distance to any thief along the path. This involves using a priority queue to always extend the path with the currently highest minimum safeness factor.

# Complexity
- Time complexity:
$O(n^2log(n^2())$ due to heap operations over all cells.

- Space complexity:
$O(n^2)$ for the distance array and the heap.

[Code](./2812-Find-the-Safest-Path-in-a-Grid.ts)