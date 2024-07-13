# Intuition
To solve the problem of finding the minimum difference between the largest and smallest values of an array after performing at most three moves, we can follow these steps:

# Approach
1. Sort the Array: Start by sorting the array. This helps in easily identifying the largest and smallest values.
2. Edge Cases: If the array has 4 or fewer elements, we can make all elements the same with at most three moves, so the minimum difference is 0.
3. Minimize Difference: Calculate the difference between the possible smallest and largest values after performing the three moves. Specifically, consider the following scenarios:
   - Remove the three largest elements.
   - Remove the two largest elements and one smallest element.
   - Remove the one largest element and two smallest elements.
   - Remove the three smallest elements.
4. Return the Minimum Difference: The result is the minimum difference obtained from the above scenarios.

# Complexity
- Time complexity:
$O(n~logn)$, where $n$ is the length of the `nums` array. Sorting the array dominates the time complexity.

- Space complexity:
$O(1)$, since we are using a constant amount of extra space.

[Code](./1509-Minimum-Difference-Between-Largest-and-Smallest-Value-in-Three-Moves.ts)