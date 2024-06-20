# Intuition
To determine whether there exist two integers $a$ and $b$ such that $a^2 + b^2 = c$, we can use a two-pointer technique. This approach is efficient and avoids the need for nested loops.

# Approach
1. Initialize Two Pointers: Start with two pointers, `a` at 0 and `b` at the integer square root of `c`.
2. Check Sum of Squares: Compute the sum of squares of the numbers pointed to by `a` and `b`. If the sum is equal to `c`, return `true`.
3. Adjust Pointers:
   - If the sum of squares is less than `c`, increment the `a` pointer to increase the sum.
   - If the sum of squares is greater than `c`, decrement the `b` pointer to decrease the sum.
4. Repeat: Continue the process until `a` exceeds `b`

# Complexity
- Time complexity:
$O(\sqrt{c})$, since the maximum value of $b$ is the integer square root of $c$ and $a$ ranges from 0 to the integer square root of $c$

- Space complexity:
$O(1)$, as we are using a constant amount of extra space.

[Code](./633-Sum-of-Square-Numbers.ts)