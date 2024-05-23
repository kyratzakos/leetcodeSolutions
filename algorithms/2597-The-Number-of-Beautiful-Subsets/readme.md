# Intuition
To solve this problem, we need to count the number of non-empty subsets of an array `nums` that do not contain two integers with an absolute difference equal to `k`. We can use backtracking to explore all possible subsets and check if they are beautiful.

# Approach
1. Backtracking: Use a recursive function to generate subsets. At each step, decide whether to include the current element in the subset.
2. Beautiful Check: Maintain a frequency map to ensure no two elements in the subset have an absolute difference equal to `k`.
3. Count Beautiful Subsets: Increment the count whenever a beautiful subset is found.

# Complexity
- Time complexity:
The time complexity is $O(2^n)$, where $n$ is the length of the nums array. Each element can either be included or excluded, leading to $2^n$ subsets.

- Space complexity:
$O(n)$ for the recursion stack and frequency map.

[Code](./2597-The-Number-of-Beautiful-Subsets.ts)