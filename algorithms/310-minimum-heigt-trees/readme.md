# Intuition
To solve the problem of finding all the nodes that can be the root of a Minimum Height Tree (MHT), we need to consider the properties of trees and their structure. Specifically, the idea is to repeatedly trim the leaves (nodes with only one connection) until one or two nodes remain. These remaining nodes will be the roots of the MHTs. This is because the center of a tree provides the minimum height when chosen as the root.

# Approach
1. Identify Leaves: Start by identifying all the leaves in the tree. Leaves are nodes that have only one connection.
2. Trim Leaves: Remove the leaves from the tree, and update the degrees of the nodes that were connected to the leaves. The new leaves are the nodes that now have only one connection.
3. Repeat: Repeat the process of removing leaves until only one or two nodes remain. If only one node remains, it is the root of an MHT. If two nodes remain, both are valid roots for MHTs. 

# Complexity
- Time complexity: The overall time complexity of the algorithm is $O(n)$, since both building the graph and the leaf-trimming process are linear in terms of the number of nodes

- Space complexity: The space complexity is also $O(n)$ due to the storage requirements of the adjacency list and the queue of leaves.

[Code](./310-minimum-height-trees.ts)