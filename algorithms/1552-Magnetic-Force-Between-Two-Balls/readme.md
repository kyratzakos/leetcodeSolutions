# Intuition
To solve this problem, we need to maximize the minimum magnetic force between any two balls when they are placed in the baskets. This can be approached using binary search combined with a greedy algorithm.

# Approach
1. Sort Positions: First, sort the `position` array. This allows us to apply a binary search over the possible minimum force values.
2. Binary Search on Force: Use binary search to find the maximum possible minimum force.
3. Greedy Placement: For each midpoint in the binary search, use a greedy algorithm to check if it is possible to place all balls such that the minimum force is at least the midpoint.


# Complexity
- Time complexity:
$O(n~log(max−min))$, where $n$ is the length of the `position` array and $(max−min)$ is the range of possible distances. Sorting the array takes $O(n~logn)$ and each binary search step involves an $O(n)$ feasibility check.

- Space complexity:
$O(1)$, since we are using only a constant amount of additional space.

[Code](./1552-Magnetic-Force-Between-Two-Balls.ts)