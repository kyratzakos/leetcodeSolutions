# Intuition
The function `occurrencesOfElement` is designed to handle queries regarding the positions of occurrences of a specific element `x` in an array `nums`. The function first determines all indices where `x` appears in `nums`. Then, it processes a series of queries, each asking for the position of the `x` occurrence based on its order (e.g., the 1st occurrence, the 2nd occurrence). If a query requests a position beyond the number of times `x` appears, the function returns `-1`.

# Approach
1. Identify Indices of `x`:
   - Traverse the array `nums` and record the indices where the value equals `x`.
   - Store these indices in a list `indexesOfX`.
2. Process Queries:
   - For each value in `queries`, interpret the value as the order of the occurrence of `x` desired.
   - If the order specified by a query exceeds the number of recorded occurrences (length of `indexesOfX`), return `-1` indicating the query is out of bounds.
   - Otherwise, return the index from `indexesOfX` that corresponds to the order specified by the query (considering that queries are 1-based).
3. Return Results:
Compile the results of each query into an array `answer` and return this array.

# Complexity
- Time complexity:
The overall time complexity is $O(n+q)$, where $n$ is the length of the `nums` array and $q$ is is the number of queries.

- Space complexity:
The total space complexity is $O(m+q)$ where $m$ is the number of times `x` appears in `nums` and $q$ the length of the `answer` array.

[Code](./3159-Find-Occurrences-of-an-Element-in-an-Array.ts)