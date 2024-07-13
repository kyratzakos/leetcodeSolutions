# Intuition
This problem can be solved using a dynamic programming approach, similar to the "House Robber" problem. Here's a structured approach to solve it:

See House Robber solution [Here](https://leetcode.com/problems/house-robber/solutions/5441827/typescript-approach/)

# Approach
1. Count Frequency: First, count the frequency of each number in the array.
2. Calculate Points: For each number, calculate the total points that can be earned by deleting all instances of that number.
3. Dynamic Programming:
   - Use a dynamic programming array `dp` where `dp[i]` represents the maximum points that can be earned considering numbers up to `i`.
   - The state transition will be similar to the "House Robber" problem: either take the current number (and add its points to `dp[i-2]`) or skip it (and take the points from `dp[i-1]`).


# Complexity
- Time complexity:
$O(n+k)$, where $n$ is the length of the input array `nums` and $k$ is the range of numbers in `nums` (specifically, the maximum number in `nums`).

- Space complexity:
$O(k)$, where $k$ is the maximum number in `nums`, due to the `dp` array and frequency map.

[Code](./740-Delete-and-Earn.ts)