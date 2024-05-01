# Approach
1. Find the First Occurrence: Determine the index of the first occurrence of the given character `ch` in the string `word`.
2. Reverse the Segment: If the character is found, reverse the portion of the string from the start up to and including the index of that character.
3. Concatenate: Combine the reversed segment with the rest of the string that follows the specified character.
4. Return the Modified String: If the character is not found, return the string as is.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the length of the string. The complexity arises from searching for the character, reversing a substring, and constructing the final result.

- Space complexity:
$O(n)$, since we create new strings for the reversed segment and the result. The space usage is primarily dependent on the size of the input string.

[Code](./2000-Reverse-prefix-of-Word.ts)