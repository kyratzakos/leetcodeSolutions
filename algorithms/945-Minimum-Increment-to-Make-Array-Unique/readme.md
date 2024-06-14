# Intuition
To solve the problem of making every value in the array `nums` unique with the minimum number of moves, we can follow these steps:

# Approach
1. Sort the Array: Start by sorting the array. This makes it easier to ensure uniqueness by adjusting adjacent elements.
2. Increment to Ensure Uniqueness: Iterate through the sorted array, and for each element, ensure it is greater than the previous element by incrementing it as needed.


# Complexity
- Time complexity:
$O(nlogn)$, where $n$ is the length of the `nums` array. This is due to the sorting operation.

- Space complexity:
$O(1)$, since we are using a constant amount of extra space beyond the input array.

[Code](./945-Minimum-Increment-to-Make-Array-Unique.ts)