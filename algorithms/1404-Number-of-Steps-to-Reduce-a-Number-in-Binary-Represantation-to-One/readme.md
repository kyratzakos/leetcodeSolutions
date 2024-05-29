# Intuition
To solve this problem, we can simulate the process of reducing a binary number to 1 by following the given rules: dividing by 2 if the number is even and adding 1 if the number is odd. 

# Approach
1. **Simulation**: Simulate the reduction process directly on the binary string.
2. **Handling Even and Odd**: Check the last character of the string to determine if the number is even or odd and apply the corresponding operation.
3. **Binary String Manipulation**: Update the binary string accordingly while keeping track of the number of steps.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the length of the binary string. Each bit is processed at most twice.

- Space complexity:
$O(n)$ for the string manipulation.

[Code](./1404-Number-of-Steps-to-Reduce-a-Number-in-Binary-Represantation-to-One.ts)