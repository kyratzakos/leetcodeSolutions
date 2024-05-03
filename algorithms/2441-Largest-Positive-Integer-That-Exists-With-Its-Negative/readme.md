# Intuition
To solve this problem in TypeScript, we need to identify the largest positive integer `number` in an array such that both `number` and `−number` exist in the array. The best way to approach this problem is by using a ForLoop for efficient lookup of the negative counterparts.

# Approach
1. For loop: Iterate through all the elements of the array
2. Search for largest number: Assign the element to `number` if the element is following these criteria:
    - Is Positive
    - Its negative exists in the array
    - Is bigger than the stored `number`.
3. Return result: If such `number` exists, return the largest; otherwise, return `-1`.

# Complexity
- Time complexity:
$O(n^2)$. Each element's check potentially involves iterating through the entire array to find its negative counterpart, resulting in quadratic time complexity relative to the number of elements in the array.

- Space complexity:
$O(1)$. The code only uses a fixed amount of extra space.

[Code](./2441-Largest-Positive-Integer-That-Exists-With-Its-Negative.ts)