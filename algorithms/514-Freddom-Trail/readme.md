# Intuition

To solve this problem in TypeScript, we need to find the minimum number of steps to spell out a given keyword by rotating a dial clockwise or counterclockwise. We can approach this problem using dynamic programming.

# Approach

1. **Model the problem as finding the minimum path in a graph**: Each character position on the ring can be a state, and each move from one character to another represents a transition between states.
2. **Use dynamic programming**: Create a 2D DP array where `dp[i][j]` represents the minimum steps needed to spell the key up to the ith character when the jth character of the ring is at the "12:00" position.
3. **Compute transitions**: For each character in the key, compute the cost to rotate the ring from each character position that matches the previous character in the key to each position that matches the current character.
4. **Initialize the DP array**: For the first character in the key, initialize the DP values based on the minimal rotations needed from the start position (which is the "12:00" position or the first character of the ring).
5. **Optimize using position mapping**: Precompute positions of each character in the ring to quickly access all indices where a particular character appears.
6. **Compute the minimum steps**: Process each character in the key sequentially and update the DP array for each character based on the previous results.

# Complexity

- Time complexity: $$O(m×n^2)$$, where `m` is the length of the key and `n` is the length of the ring. This is due to the nested loops iterating over positions for consecutive characters in the key.

- Space complexity: $O(m×n)$ due to the storage requirements of the DP table.

[Code](./514-Freedom-Trail.ts)
