# Intuition
To solve this problem, we need to determine the minimum number of days required to make $m$ bouquets, each consisting of $k$ adjacent flowers. If it is impossible to make $m$ bouquets, we should return -1.

# Approach
1. Binary Search: Use binary search to find the minimum number of days required. The range of days will be from the minimum bloom day to the maximum bloom day in the `bloomDay` array.
2. Check Feasibility: For each midpoint in the binary search, check if it is possible to make $m$ bouquets with $k$ adjacent flowers that bloom on or before that day.

# Complexity
- Time complexity:
$O(n~logd)$, where $n$ is the number of elements in `bloomDay` and $d$ is the difference between the maximum and minimum values in `bloomDay`.

- Space complexity:
$O(1)$, aside from the input arrays, since we only use a constant amount of additional space.

[Code](./1482-Minimum-Number-of-Days-to-Make-m-Bouquets.ts)