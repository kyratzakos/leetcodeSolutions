# Intuition
Upon first glance at the problem, it's clear that direct calculation of distances for each node from every other node would be inefficient. Since we're dealing with an undirected tree (a special kind of graph), it becomes evident that we could use properties of trees, such as their hierarchical structure and the absence of cycles, to optimize the computation. The goal is to leverage the connectivity and tree structure to compute distances in a cumulative way rather than individually

# Approach
1. First DFS (`dfs1`):
    - Purpose: Calculate the total number of nodes within each subtree (`subtreeSize`) and the sum of all initial distances from a chosen root (typically node 0) to all other nodes within its subtree.
    - Implementation: Start from an arbitrary node (node 0) and compute for each node the size of its subtree and the sum of the distances from it to all nodes in its subtree.
2. Second DFS (`dfs2`):
    - Purpose: Utilize the results from the first DFS to compute the answer for each node based on the answer of its parent. This exploits the tree's structure where changing the root from a parent to its child (or vice versa) modifies the distances in a predictable way.
    - Implementation: Adjust the calculated distance from the first DFS by considering the transition of the root from the parent node to the current node. The formula `result[node] = result[parent] - subtreeSize[node] + (n - subtreeSize[node])` reflects this adjustment.

# Complexity
- Time complexity:
Each node and each edge is visited exactly twice (once in each DFS pass), leading to a time complexity of $O(N)$, where $N$ is the number of nodes in the tree.

- Space complexity:
The space complexity is also $O(N)$. The space is used for:
  - The adjacency list representation of the tree (`graph`).
  - Arrays for `subtreeSize`, `result`, and recursion stack space for the DFS calls.

[Typescript](./834-Sum-of-Distances-in-Tree.ts)