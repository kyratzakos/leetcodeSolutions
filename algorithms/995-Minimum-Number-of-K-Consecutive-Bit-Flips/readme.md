# Intuition
To solve this problem, we need to determine the minimum number of k-bit flips required to turn all the elements of the binary array `nums` to 1. If it's not possible, we should return -1.

# Approach
1. Sliding Window with Flip Tracking: We can use a sliding window approach combined with a technique to track the flips efficiently.
2. Greedy Algorithm: Use a greedy approach to flip the bits starting from the leftmost 0, ensuring all flips are necessary and efficient.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the length of the `nums` array. Each element is processed once.

- Space complexity:
$O(n)$, due to the additional space required for the `isFlipped` array.

[Code](./995-Minimum-Number-of-K-Consecutive-Bit-Flips.ts)