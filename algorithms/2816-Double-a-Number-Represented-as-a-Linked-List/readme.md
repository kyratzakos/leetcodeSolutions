# Intuition
The function `doubleIt` takes a singly-linked list and modifies it based on a specific logic: it doubles the value of each node, restricts the result to a single digit by taking modulo 10, and potentially adds 1 to a node's value if the next node's value is greater than 4. Additionally, if the head node's value exceeds 4, a new node with a value of 0 is prepended to the list. This operation simulates a kind of conditional transformation and adjustment of values throughout the linked list.

# Approach
1. Prepend a New Head Node (Conditionally): If the value at the head of the list exceeds 4, create a new head node with a value of 0 and link it to the existing head.
2. Iterate Through Nodes:
   - Traverse each node starting from the head.
   - For each node, double its value and then reduce it to a single digit using modulo 10.
   - Check the next node's value; if it's greater than 4, add 1 to the current node's value.
4. Return Modified List: After processing all nodes, return the head of the modified list.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of nodes in the list. The function iterates through each node exactly once to apply the transformations.

- Space complexity:
$O(1)$ for operations since no additional structures are used that grow with input size. However, note that there's an $O(1)$ space cost for potentially adding a single new node at the beginning, but this does not scale with the size of the input list.

[Code](./2816-Double-a-Number-Represented-as-a-Linked-List.ts)