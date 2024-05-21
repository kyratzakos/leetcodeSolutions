# Intuition
To generate all possible subsets (the power set) of an array of unique elements, we can use a backtracking approach. Backtracking is a useful technique for generating all possible combinations or permutations of a given set.

# Approach
1. Recursive Backtracking: Use a recursive function to explore all possible subsets. At each step, decide whether to include or exclude the current element.
2. Base Case: When all elements have been considered, add the current subset to the result.
3. Recursive Case: For each element, create two branches: one where the element is included in the current subset, and one where it is excluded.

# Complexity
- Time complexity:
$O(2^n)$, where $n$ is the number of elements in the input array. Each element can either be included or excluded, resulting in $2^n$ subsets.

- Space complexity:
$O(n)$ for the recursion stack and the current subset.

[Code](./78-Subsets.ts)