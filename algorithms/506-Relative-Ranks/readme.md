# Intuition
To solve the problem of assigning ranks based on scores in TypeScript, where we have specific titles for the top three scores ("Gold Medal", "Silver Medal", and "Bronze Medal"), and numerical rankings for the rest, we can follow these steps.

# Approach
1. Sort the Scores with Indices: Create an array of indices and scores, then sort this array by scores in descending order. This helps in determining the rank based on scores directly.
2. Assign Ranks: Create a new array to store the ranks. For the top three scores, assign the special titles. For all other scores, assign their ranking based on their position in the sorted list.
3. Map Back to Original Order: Since the athletes should be ranked according to their original positions in the input array, you will need to place each rank back into the position corresponding to the original score.

# Complexity
- Time complexity:
$O(nlogn)$ due to the sorting operation, where $n$ is the number of scores.

- Space complexity:
$O(n)$ for storing the mapping of scores and their original indices, and for the output array.

[Code](./506-Relative-Ranks.ts)