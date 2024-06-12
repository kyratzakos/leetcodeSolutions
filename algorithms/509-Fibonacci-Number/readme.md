# Intuition
To solve the problem of calculating the nth Fibonacci number, we can use several approaches. The most efficient ones in terms of time complexity for large values of $n$ are dynamic programming (iterative) and matrix exponentiation. Here, I'll show you the dynamic programming approach, which is straightforward and easy to understand.

# Approach
1. Base Cases: Define the base cases for $F(0)$ and $F(1)$.
2. Iterative Calculation: Use an iterative approach to calculate $F(n)$ by storing the previous two Fibonacci numbers and updating them iteratively.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the input number. We iterate from 2 to $n$ once.

- Space complexity:
$O(1)$, since we are using a constant amount of extra space (only a few variables for the calculations).

[Code](./509-Fibonacci-Number.ts)