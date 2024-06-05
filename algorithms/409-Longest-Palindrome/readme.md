# Intuition
To solve the problem of finding the length of the longest palindrome that can be built using the characters of a given string s, we need to understand some key points about palindromes:
- A palindrome reads the same forward and backward.
- To form a palindrome, we can pair characters symmetrically around the center.
- We can include at most one character with an odd frequency in the center of the palindrome.

# Approach
1. Count Character Frequencies: Use a Map or an array to count the frequencies of each character in the string.
2. Calculate Pairs and Single Characters: Iterate through the frequency map to calculate the number of pairs and check if there's at least one character with an odd frequency.
3. Compute Palindrome Length:
   - Add pairs to the palindrome length.
   - If there's any character with an odd frequency, add one more to the length (for the center character).


# Complexity
- Time complexity:
$O(n)$, where $n$ is the length of the string. We traverse the string once to count frequencies and then traverse the map to compute the palindrome length.

- Space complexity:
$O(1)$ if we consider the number of possible characters (52 for case-sensitive English letters) as constant. Otherwise, it’s $O(k)$, where $k$ is the number of unique characters in the string.

[Code](./409-Longest-Palindrome.ts)