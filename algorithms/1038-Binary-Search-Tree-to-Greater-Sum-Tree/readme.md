# Intuition
To solve this problem, we need to transform a Binary Search Tree (BST) such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in the BST. This is known as converting the BST to a Greater Tree.

# Approach
1. Reverse In-order Traversal: Traverse the tree in reverse in-order (right -> node -> left) because this order allows us to visit nodes in descending order.
2. Accumulate Sum: Use a variable to keep track of the cumulative sum of nodes visited so far.
3. Update Nodes: As we traverse the tree, update each node's value by adding the cumulative sum.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of nodes in the tree. Each node is visited exactly once.

- Space complexity:
$O(h)$, where $h$ is the height of the tree. This is due to the recursive call stack.

[Code](./1038-Binary-Search-Tree-to-Greater-Sum-Tree.ts)