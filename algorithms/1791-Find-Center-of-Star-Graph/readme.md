# Intuition
To identify the center of the star graph, we can leverage the property that the center node is the only node that is connected to all other nodes. Therefore, the center node will appear in every edge.

# Approach
1. Edge Analysis: Since the star graph has exactly $n−1$ edges and there is one center node connected to every other node, the center node must be one of the nodes in the first edge.
2. Check Node Occurrences: Check the first two edges to see which node is common in both. The common node will be the center of the star graph.


# Complexity
- Time complexity:
$O(1)$. The algorithm only checks the first two edges, resulting in a constant-time operation.

- Space complexity:
$O(1)$. No additional space is used beyond a few variables.

[Code](./1791-Find-Center-of-Star-Graph.ts)