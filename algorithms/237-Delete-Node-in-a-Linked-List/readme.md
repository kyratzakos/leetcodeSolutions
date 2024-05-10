# Intuition
In TypeScript, to solve the problem of deleting a node from a singly-linked list when you are only given access to that node (and not the head of the list), you need to perform the deletion by copying the data from the next node into the current node and then removing the next node. This effectively deletes the node from the perspective of any observer of the list.


# Approach
1. Copy the value from the next node into the given node.
2. Set the `next` pointer of the given node to skip the next node, thereby deleting it.

# Complexity
- Time complexity:
$O(1)$ since the deletion operation involves a constant amount of work regardless of the size of the linked list.

- Space complexity:
$O(1)$ as no additional space proportional to the size of the input data is used.

[Code](./237-Delete-Node-in-a-Linked-List.ts)