# Intuition
To solve the problem of sorting the array `nums` containing the integers 0, 1, and 2 representing red, white, and blue respectively, we can use the Dutch National Flag algorithm. This algorithm efficiently sorts the array in one pass with constant space complexity.

# Approach
1. Three Pointers: Use three pointers to manage the positions of 0s, 1s, and 2s.
   - `low` for the position where the next 0 should go.
   - `mid` for the current element being examined.
   - `high` for the position where the next 2 should go.
2. Partitioning: Traverse the array and place the elements in the correct positions by swapping them with the pointers.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of elements in `nums`. Each element is processed at most once.

- Space complexity:
$O(1)$, since we are using a constant amount of extra space (only the pointers).

[Code](./75-Sort-Colors.ts)