# Intuition
To solve this problem, we can use a dynamic programming approach. The idea is to keep track of the minimum cost to reach each step and use this information to compute the minimum cost to reach the top of the staircase.

# Approach
1. Dynamic Programming Array: Create an array `dp` where `dp[i]` represents the minimum cost to reach the ith step.
2. Initialization: The cost to start from step 0 or step 1 is just the cost of those steps.
3. State Transition: For each step from 2 to the top, the cost to reach that step is the minimum of the cost to reach the previous step plus the cost of the previous step, or the cost to reach the step before the previous step plus the cost of the step before the previous step.
4. Result: The minimum cost to reach the top is the minimum of the cost to reach the last step or the step before the last step.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the length of the `cost` array. We iterate through the array once.

- Space complexity:
$O(n)$, due to the space required to store the `dp` array.

[Code](./746-Min-Cost-Climbing-Stairs.ts)