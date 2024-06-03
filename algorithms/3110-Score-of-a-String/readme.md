# Intuition
To solve the problem of calculating the score of a string, which is defined as the sum of the absolute differences between the ASCII values of adjacent characters, we can follow these steps.

# Approach
1. Iterate Through the String: Loop through the string from the first character to the second-to-last character.
2. Calculate ASCII Differences: For each pair of adjacent characters, calculate the absolute difference between their ASCII values.
3. Sum the Differences: Accumulate the sum of these differences.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the length of the string. We iterate through the string once.

- Space complexity:
$O(1)$, as we use a constant amount of extra space for the score variable.

[Code](./3110-Score-of-a-String.ts)