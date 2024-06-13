# Intuition
To solve the problem of minimizing the number of moves required to seat each student such that no two students occupy the same seat, we can follow these steps:

# Approach
1. Sort Arrays: Sort both `seats` and `students` arrays. By doing this, we can pair the closest seats and students together, ensuring that we minimize the total movement.
2. Calculate Total Moves: Iterate through the sorted arrays and sum the absolute differences between corresponding elements.

# Complexity
- Time complexity:
$O(nlogn)$, where $n$ is the number of elements in the `seats` and `students` arrays. This is due to the sorting operations.

- Space complexity:
$O(1)$, as we are using a constant amount of extra space beyond the input arrays and a few variables.

[Code](./2037-Minimum-Number-of-Moves-to-Seat-Everyone.ts)