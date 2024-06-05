# Intuition
To solve this problem, we need to find all characters that appear in every string within the given array words, including duplicates. This can be done using a frequency count for each character across all words and then taking the minimum frequency of each character.

# Approach
1. Initialize Frequency Arrays: Create an array to store the minimum frequency of each character across all words.
2. Count Frequencies for Each Word: For each word, count the frequency of each character.
3. Update Global Minimum Frequency: Update the global frequency array to keep the minimum frequency of each character across all words.
4. Generate Result: Based on the global minimum frequency array, generate the result list of characters.


# Complexity
- Time complexity:
$O(n⋅m)$, where $n$ is the number of words and $m$ is the average length of the words. We iterate through each word and each character in the word.

- Space complexity:
$O(1)$, since the space used for the frequency arrays is constant (size 26 for each letter of the alphabet).

[Code](./1002-Find-Common-Characters.ts)