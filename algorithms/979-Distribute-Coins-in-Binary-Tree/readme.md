# Intuition
To solve the problem of redistributing coins in a binary tree so that each node ends up with exactly one coin, we can use a Depth-First Search (DFS) approach. The idea is to traverse the tree and calculate the number of excess coins at each node. The excess coins are the number of coins a node has minus one (since each node should ideally have exactly one coin). During the DFS traversal, we keep track of the total number of moves required to balance the tree.

# Approach
1. Traverse the Tree Using DFS: Perform a post-order traversal of the tree.
2. Calculate Excess Coins: For each node, calculate the excess coins and propagate the excess to its parent. This helps in determining the number of moves required.
3. Accumulate Moves: For each node, accumulate the absolute value of excess coins, as this represents the number of moves required to balance the coins between the nodes.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of nodes in the tree. Each node is visited once.

- Space complexity:
$O(h)$, where $h$ is the height of the tree, due to the recursive call stack. For a balanced tree, the height is $O(logn)$.

[Code](./979-Distribute-Coins-in-Binary-Tree.ts)