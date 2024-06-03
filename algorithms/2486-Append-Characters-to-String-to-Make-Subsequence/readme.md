# Intuition
To solve this problem, we need to determine the minimum number of characters that must be appended to the end of string `s` so that string `t` becomes a subsequence of `s`. Here's the approach to solve this problem.

# Approach
1. Two-Pointer Technique: Use two pointers to iterate through `s` and `t`. Try to match each character of `t` with characters in `s` sequentially.
2. Count Matched Characters: Count how many characters of `t` are matched in `s`.
3. Calculate Appends: The number of characters to append is the length of `t` minus the number of matched characters.

# Complexity
- Time complexity:
$O(n+m)$, where $n$ is the length of `s` and $m$ is the length of `t`. Each character of `s` and `t` is processed once.

- Space complexity:
$O(1)$, since only a few additional variables are used.

[Code](./2486-Append-Characters-to-String-to-Make-Subsequence.ts)