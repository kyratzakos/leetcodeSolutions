# Intuition
To solve the problem of finding the longest ideal subsequence from a given string `s` where the absolute difference in the alphabet order of every two adjacent letters is less than or equal to `k`, we can use dynamic programming. The idea is to maintain an array that keeps track of the longest subsequence that can be formed ending with each possible letter in the alphabet.

# Approach
1. Initialize a Dynamic Programming Array: Create an array `dp` of size 26 (for each lowercase letter from 'a' to 'z'), initialized to zero. This array will store the length of the longest ideal subsequence ending with the corresponding letter.
2. Iterate Through the String: For each character in the string `s`, update the `dp` array by considering subsequences that could be extended by this character.
3. Update for Each Character: For the current character `char` in the string, calculate the possible range of characters that can precede `char` in an ideal subsequence based on the condition that the difference in their positions in the alphabet is at most `k`.
4. Dynamic Programming Transition: Update the `dp` value for `char` by checking all allowable preceding characters and taking the maximum length subsequence found, then adding 1 (for the current character).
Result: The length of the longest ideal subsequence will be the maximum value in the dp array after processing all characters in s.
5. Result: The length of the longest ideal subsequence will be the maximum value in the `dp` array after processing all characters in `s`.

# Complexity
- Time complexity:
$O(n×k)$ where n is the length of the string s and k is the given difference limit. This is because for each character in the string, we potentially check up to 2k + 1 entries in the dp array.

- Space complexity:
$O(1)$, specifically $O(26)$, as we maintain a fixed-size array regardless of the input size.

[Code](./2370-Longest-Ideal-Subsequence.ts)