# Intuition
To solve this problem, we need to traverse the linked list and merge the nodes between two consecutive `0`s into a single node with the value being the sum of the merged nodes. Here's how we can achieve this:

# Approach
1. Traverse the Linked List: Iterate through the linked list while keeping track of the sum of nodes between consecutive `0`s.
2. Sum Nodes: When encountering a `0`, check if the sum of nodes between the last `0` and the current `0` is non-zero. If so, create a new node with this sum.
3. Build Modified List: Skip the `0`s and build the modified list with the summed nodes.
4. Return Modified List: The resulting linked list should have nodes representing the summed values and no `0`s.


# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of nodes in the linked list. We traverse the list once.

- Space complexity:
$O(1)$, as we use only a constant amount of extra space (not counting the space for the output list).

[Code](./2181-Merge-Nodes-in-Between-Zeros.ts)