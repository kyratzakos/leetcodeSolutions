# Intuition
To determine if there are three consecutive odd numbers in an array, we can simply iterate through the array and keep a count of consecutive odd numbers. If we find three consecutive odd numbers at any point, we return `true`. Otherwise, after iterating through the array, we return `false`.

# Approach
1. Initialize a Counter: Start with a counter set to 0.
2. Iterate Through the Array:
   - If the current number is odd, increment the counter.
   - If the current number is even, reset the counter to 0.
   - If the counter reaches 3, return `true`.
3. Return False: If the loop completes without finding three consecutive odd numbers, return `false`.


# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of elements in the array. We iterate through the array once.

- Space complexity:
$O(1)$, since we are using a constant amount of extra space for the counter.

[Code](./1550-Three-Consecutive-Odds.ts)