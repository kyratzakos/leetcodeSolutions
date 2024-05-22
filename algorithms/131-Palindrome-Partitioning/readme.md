# Intuition
To solve the problem of partitioning a string such that every substring of the partition is a palindrome, we can use a backtracking approach. This approach will recursively explore all possible partitions and check if each substring is a palindrome.

# Approach
1. Backtracking: Use a recursive function to generate partitions. At each step, choose a substring, check if it's a palindrome, and then recursively partition the rest of the string.
2. Palindrome Check: Implement a helper function to check if a given substring is a palindrome.
3. Base Case: When the start index reaches the end of the string, add the current partition to the result.

# Complexity
- Time complexity:
The time complexity is $O(N⋅2^N)$, where $N$ is the length of the string. This is due to the recursive exploration of all possible partitions and the palindrome checks for each substring.

- Space complexity:
The space complexity is $O(N)$ for the recursion stack and current partition storage.

[Code](./131-Palindrome-Partitioning.ts)