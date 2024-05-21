# Intuition
To solve the problem of deleting all leaf nodes with a given target value in a binary tree and continuously checking if the parent nodes become new target leaf nodes, we can use a recursive approach. The idea is to traverse the tree in a post-order manner (i.e., process the children before the parent) to ensure we check and possibly delete the leaf nodes before considering their parents.

# Approach
1. Traverse the Tree: Use a recursive function to traverse the tree in post-order.
2. Check and Delete Leaf Nodes: If a node is a leaf and its value matches the target, delete it by returning `null`.
3. Propagate Deletions Upward: After processing the children, check if the current node has become a new leaf node with the target value and needs to be deleted.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of nodes in the tree, since each node is visited once.

- Space complexity:
$O(h)$, where $h$ is the height of the tree, due to the recursive call stack. For a balanced tree, the height is $O(logn)$.

[Code](./1325-Delete-Leaves-With-a-Given-Value.ts)