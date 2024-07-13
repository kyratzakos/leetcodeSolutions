# Intuition
To solve this problem, we can use dynamic programming. The idea is to maintain an array `dp` where `dp[i]` represents the maximum amount of money that can be robbed from the first `i` houses.

# Approach
1. Dynamic Programming Array: Initialize an array `dp` where `dp[i]` represents the maximum amount of money that can be robbed from the first `i` houses.
2. Base Cases:
   - `dp[0]` is `nums[0]` since if there's only one house, the maximum amount that can be robbed is the amount in that house.
   - `dp[1]` is `max(nums[0], nums[1])` since you can only rob one of the first two houses.
3. State Transition:
   - For each house from index 2 to `n-1`, decide whether to rob the current house and add its amount to the maximum amount from two houses before `(dp[i-2] + nums[i])`, or skip the current house and take the maximum amount from the previous house `(dp[i-1])`.
   - The state transition formula is: `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`.


# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of houses. We iterate through the list once.

- Space complexity:
$O(n)$, for the `dp` array storing the maximum amounts up to each house.

[Code](./198-House-Robber.ts)