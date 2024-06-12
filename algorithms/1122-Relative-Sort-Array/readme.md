# Intuition
To solve the problem of sorting `arr1` based on the order of elements in `arr2`, we can use a custom sorting approach. Here's a structured plan to achieve the solution:

# Approach
1. Create a Mapping: Create a mapping of the elements in `arr2` to their indices. This will help us determine the relative order quickly.
2. Custom Sort: Use the custom sort function to sort `arr1` based on the mapping. Elements that are not in `arr2` should be placed at the end in ascending order.
3. Partition and Sort:
   - Partition `arr1` into two parts: elements present in `arr2` and elements not present in `arr2`.
   - Sort the elements present in `arr2` using the mapping.
   - Sort the remaining elements in ascending order.


# Complexity
- Time complexity:
$O(nlogn)$, where $n$ is the length of `arr1`. The sorting operation dominates the complexity.

- Space complexity:
$O(m)$, where $m$ is the length of `arr2`, due to the space required for the mapping.

[Code](./1122-Relative-Sort-Array.ts)