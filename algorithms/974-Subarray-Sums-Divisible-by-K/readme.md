# Intuition
To solve this problem, we can use a prefix sum approach combined with a hashmap (or dictionary) to efficiently count the number of subarrays with a sum divisible by `k`. The key idea is to use the prefix sum and the properties of modular arithmetic.

# Approach
1. Prefix Sum and Remainder: Compute the prefix sum while iterating through the array and use the remainder of the prefix sum divided by `k` to determine if a subarray sum is divisible by `k`.
2. HashMap for Counting Remainders: Use a hashmap to keep track of the frequency of each remainder encountered so far.
3. Subarray Count: If a prefix sum has a remainder that has been seen before, it means there are subarrays that have a sum divisible by `k`.


# Complexity
- Time complexity:
$O(n)$, where $n$ is the length of `nums`. We iterate through the array once.

- Space complexity:
$O(k)$, as the hashmap stores at most $k$ different remainders.

[Code](./974-Subarray-Sums-Divisible-by-K.ts)