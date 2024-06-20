# Intuition
To solve this problem, we need to maximize the profit by assigning each worker to the most profitable job they can complete given their ability. Here's a structured plan to achieve the solution:

# Approach
1. Combine and Sort Jobs: Create a list of jobs combining difficulty and profit, then sort it by difficulty.
2. Sort Workers: Sort the workers by their abilities.
3. Assign Jobs to Workers: Iterate through the sorted list of workers and assign them the best job they can complete using a greedy approach.

# Complexity
- Time complexity:
$O(n~logn+m~logm)$, where $n$ is the number of jobs and $m$ is the number of workers. Sorting both arrays dominates the complexity.

- Space complexity:
$O(n)$, due to the additional space required for the `jobs` array.

[Code](./826-Most-Profit-Assigning-Work.ts)