# Intuition
To solve this problem, we need to find all possible ways to segment the given string `s` such that each segment is a valid word in the dictionary `wordDict`. This problem can be approached using backtracking with memoization to avoid redundant computations.

# Approach
1. Backtracking with Memoization: Use a recursive function to explore all possible segmentations. Use a memoization dictionary to store results for subproblems to avoid redundant computations.
2. Recursive Function: At each step, check if the current prefix of the string is a valid word in the dictionary. If it is, recursively solve the problem for the remaining suffix of the string.
3. Base Case: When the string is empty, return an empty list indicating a valid segmentation.


# Complexity
- Time complexity:
The time complexity is exponential in the worst case due to the recursive exploration of all possible segmentations. However, memoization helps in reducing redundant computations.

- Space complexity:
The space complexity is $O(n^2)$ due to the memoization storage and recursive call stack, where n is the length of the input string `s`.

[Code](./140-Word-Break-II.ts)