# Intuition
To solve this problem, we need to determine how many indices in the array heights do not match the indices in the sorted version of the array. The sorted array represents the expected order of the students by height.

# Approach
1. Sort the Array: Create a sorted version of the `heights` array to represent the expected order.
2. Compare Arrays: Compare the original `heights` array with the sorted `expected` array and count the number of indices where the elements differ.


# Complexity
- Time complexity:
$O(nlogn)$, where $n$ is the length of the `heights` array. This is due to the sorting operation.


- Space complexity:
$O(n)$, as we create a copy of the `heights` array to sort it.

[Code](./1051-Height-Checker.ts)