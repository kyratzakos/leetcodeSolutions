# Intuition
To solve the problem of counting the number of "wonderful" non-empty substrings in a string using the first ten lowercase English letters ('a' to 'j'), we need to efficiently track the frequency of each letter in every possible substring. A direct approach involving checking each substring individually would be too slow, so we'll use bit manipulation and prefix sums to optimize.

# Approach
1. Bit Masking: Use a bit mask of size 10 (since there are only 10 different characters) to represent the even/odd state of each character's count in the substring. For example, if the bit at position `i` is `1`, then the character corresponding to `a + i` appears an odd number of times.
2. Prefix Sum with Bit Masking: As you iterate through the string, update the bitmask based on the current character. Calculate the "wonderfulness" of all substrings ending at the current character by:
    - Checking the current bitmask (currentMask).
    - Checking all bitmasks that differ from the currentMask by exactly one bit (since a wonderful substring can have at most one character that appears an odd number of times).
    - Using a hashmap to keep track of all previously seen bitmasks and their frequencies.
3. Count Substrings: For each position in the string, calculate how many substrings ending at that position are wonderful by looking up in the hashmap.

# Complexity
- Time complexity:
$O(n×k)$, where $n$ is the length of the string and $k$ is the number of bits (10 in this case). The loop runs for each character, and for each character, we check up to 10 different bit toggles

- Space complexity:
$O(2^k)$, where $k$ is 10 because we might end up storing each possible bitmask in the worst case. This is about 1024 entries in the hashmap.

[Code](./1915-Number-of-Wonderful-Substrings.ts)