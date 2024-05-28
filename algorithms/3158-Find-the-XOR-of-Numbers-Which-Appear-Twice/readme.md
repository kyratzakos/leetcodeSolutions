# Intuition
To solve this problem, we need to find the numbers that appear twice in the array and then compute the bitwise XOR of those numbers.

# Approach
1. Count Frequencies: Use a set to count the frequency of each number in the array.
2. Find Duplicates: While iterating, go through the set to find numbers that appear exactly twice.
3. Compute XOR: Compute the bitwise XOR of all the numbers that appear twice.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of elements in the nums array. This is because we iterate through the array to count frequencies and then iterate through the `frequencyArray` to find duplicates.

- Space complexity:
$O(n)$, due to the space required to store the frequency array.

[Code](./3158-Find-the-XOR-of-Numbers-Which-Appear-Twice.ts)