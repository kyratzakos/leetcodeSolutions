# Intuition
To solve the problem of comparing two version numbers in TypeScript, we can break down each version into its constituent revisions (the numbers separated by dots) and compare these revisions one by one.

# Approach
1. Splitting the Version Numbers: Split each version string by the dot ('.') to obtain individual revision strings.
2. Comparing Revisions: Compare the numeric values of the revisions from left to right. Since revisions might contain leading zeros and vary in length, parse them into integers before comparison.
3. Handling Missing Revisions: If one version has more revisions than the other, treat the missing revisions of the shorter version as `0`.
4. Returning the Comparison Result: Depending on the comparison, return `-1`, `1`, or `0`.

# Complexity
- Time complexity:
$O(n+m)$, where $n$ and $m$ are the lengths of `version1` and `version2` respectively. This is because we perform a single pass comparison after the initial split.

- Space complexity:
$O(n+m)$, primarily due to the storage required for the split arrays

[Code](./165-Compare-Version-Numbers.ts)