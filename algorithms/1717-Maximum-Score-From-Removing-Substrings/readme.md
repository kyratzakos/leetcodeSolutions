# Intuition
To solve this problem, we need to strategically remove substrings "ab" and "ba" to maximize the points gained. We can achieve this by using a stack-based approach to process the string in two passes:

# Approach
1. First Pass: Prioritize the more valuable operation between removing "ab" and removing "ba". This helps to maximize the points for the more valuable operation.
2. Second Pass: After the first pass, handle the remaining potential "ab" or "ba" substrings in the stack to gain additional points.


# Complexity
- Time complexity:
$O(n)$, where $n$ is the length of the input string. Each character is processed a constant number of times.

- Space complexity:
$O(n)$, for the stack used during processing.

[Code](./1717-Maximum-Score-From-Removing-Substrings.ts)