# Intuition
To solve this problem, we need to find the maximum score of any valid set of words that can be formed using the given letters. A backtracking approach will help us explore all possible combinations of words while keeping track of the letter counts and scores.

# Approach
1. Frequency Count: Count the frequency of each letter in the given list of letters.
2. Backtracking: Use a recursive function to explore all possible subsets of words, ensuring each subset adheres to the letter constraints and calculating their respective scores.

# Complexity
- Time complexity:
$O(2^n)$, where $n$ is the number of words. Each word can either be included or excluded, leading to $2^n$ possible subsets.

- Space complexity:
$O(n)$ for the recursion stack and letter count arrays.

[Code](./1255-Maximum-Score-Words-Formed-by-Letters.ts)