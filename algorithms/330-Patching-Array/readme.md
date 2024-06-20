# Intuition
The `minPatches` function is designed to determine the minimum number of patches (additional numbers) needed for an array `nums` so that every number from 1 to `n` can be formed as a sum of one or more numbers from the modified array. The strategy revolves around expanding the reachable range of sums as much as possible with each number in `nums` and, where gaps are found, adding new numbers to cover those gaps efficiently.

# Approach
1. Initialize Variables:
   - `patches` to count the number of numbers added to the array.
   - `i` to track the current index in the sorted array `nums`.
   - `maxReach` to maintain the maximum sum that can be reached using the numbers in nums and any added numbers, starting from 0.

2. Expand Reachable Range:
While the maximum reachable sum (`maxReach`) is less than `n`:
   - If the current number at index `i` in `nums` is less than or equal to `maxReach + 1`, use this number to extend `maxReach`. This means that including this number still allows for a continuous range of sums up to `maxReach` plus this number.
   - If the current number is greater than `maxReach + 1`, or if all numbers in `nums` are already used, then add a new number, specifically `maxReach + 1`, to fill the gap. This new number is chosen because it's the smallest number that can directly extend the current range of formable sums.

3. Continue Until Covered:
Repeat the process until the `maxReach` is at least `n`.

4. Return Result:
The number of patches added gives the minimum number needed to achieve the goal.


# Complexity
- Time complexity:
$O(m+p)$, where:
  - $m$ is the number of elements in `nums` that are iterated over. Each element is considered once as `i` increases monotonically.
  - $p$ is the number of patches added. Each patch operation effectively doubles the range of reachable sums until it exceeds `n`.

- Space complexity:
$O(1)$. No extra space is needed beyond a few variables for tracking the state of the computation. The array `nums` is not modified in place; rather, we conceptually consider adding elements to extend `maxReach`.

[Code](./330-Patching-Array.ts)