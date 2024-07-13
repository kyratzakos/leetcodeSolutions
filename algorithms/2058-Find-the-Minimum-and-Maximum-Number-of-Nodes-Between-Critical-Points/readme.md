# Intuition
To solve the problem of finding the minimum and maximum distance between critical points in a linked list, we can follow these steps:

# Approach
1. Traverse the Linked List: Traverse the linked list to identify all critical points. Store the positions of these critical points in a list.
2. Identify Critical Points: A node is a critical point if it is either a local maxima or a local minima. This means it has both a previous and a next node, and its value is either greater than both neighbors (maxima) or smaller than both neighbors (minima).
3. Calculate Distances: If there are fewer than two critical points, return `[-1, -1]`. Otherwise, calculate the minimum and maximum distance between all pairs of critical points.


# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of nodes in the linked list. We traverse the list once.

- Space complexity:
$O(k)$, where $k$ is the number of critical points. This space is used to store the positions of the critical points.

[Code](./2058-Find-the-Minimum-and-Maximum-Number-of-Nodes-Between-Critical-Points.ts)