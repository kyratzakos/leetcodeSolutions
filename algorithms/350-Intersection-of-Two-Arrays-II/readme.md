# Intuition
To find the intersection of two integer arrays `nums1` and `nums2`, where each element in the result must appear as many times as it shows in both arrays, we can follow these steps:

# Approach
1. Count Frequencies: Use a hash map to count the frequency of each element in `nums1`.
2. Find Intersection: Iterate through `nums2` and for each element, check if it exists in the hash map. If it does, add the element to the result and decrement its count in the hash map.

# Complexity
- Time complexity:
$O(n+m)$, where $n$ is the length of `nums1` and $m$ is the length of `nums2`. We iterate through both arrays once.

- Space complexity:
$O(n)$, where $n$ is the length of `nums1`. The hash map stores the count of elements in `nums1`.

[Code](./350-Intersection-of-Two-Arrays-II.ts)