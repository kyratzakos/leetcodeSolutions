# Intuition
To solve this problem, we need to calculate the sum of all XOR totals for every subset of a given array nums. We'll use a recursive method to generate all subsets and calculate their XOR values.

# Approach
1. Recursive Subset Generation: Use recursion to explore all possible subsets of the array.
2. XOR Calculation: For each subset generated, calculate the XOR total and accumulate it in the result.

# Complexity
- Time complexity:
$O(2^n)$, where $n$ is the number of elements in the array. Each element has two choices (included or excluded), leading to $2^n$ subsets.

- Space complexity:
$O(n)$ for the recursion stack.

[Code](./1863-Sum-of-All-Subset-XOR-Totals.ts)