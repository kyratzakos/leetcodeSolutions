# Intuition
To solve this problem, we need to replace words in a sentence with their respective roots, if applicable. We'll make use of a set to store the roots and then check each word in the sentence to see if it starts with any root. If it does, we'll replace it with the shortest root that matches.

# Approach
1. Store Roots: Use a set to store all roots for quick lookup.
2. Split Sentence: Split the sentence into individual words.
3. Check and Replace: For each word in the sentence, check if it starts with any root. Replace it with the shortest root found.
4. Rebuild Sentence: Combine the words back into a sentence.


# Complexity
- Time complexity:
$O(m⋅n)$, where $m$ is the length of the sentence (number of words) and $n$ is the average length of a word. The loop in `replaceWithRoot` runs up to the length of each word.

- Space complexity:
$O(m+k)$, where $m$ is the number of words in the sentence and $k$ is the number of roots in the dictionary.

[Code](./648-Replace-Words.ts)