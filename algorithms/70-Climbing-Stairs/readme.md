# Intuition
To solve the problem of finding the number of distinct ways to climb to the top of a staircase where you can take either 1 or 2 steps at a time, we can use dynamic programming or 2 variables that store the 2 previous values.

# Approach
1. Dynamic Programming: Use an array to store the number of ways to reach each step. The idea is to build up the solution from the base cases. For more efficiency, use 2 variables
2. Base Cases: There is 1 way to stay at the ground (step 0) and there is 1 way to reach the first step.
3. Recursive Relation: To reach step `i`, you can either come from step `i-1` (taking 1 step) or from step `i-2` (taking 2 steps). Thus, the number of ways to reach step `i` is the sum of ways to reach step `i-1` and ways to reach step `i-2`.


# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of steps.

- Space complexity:
$O(1)$, using only a constant amount of additional space.

[Code](./70-Climbing-Stairs.ts)