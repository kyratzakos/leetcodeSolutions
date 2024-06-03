# Intuition
Using the built-in `Array.prototype.reverse()` method in JavaScript is a straightforward and clean way to reverse an array.

# Approach
- `s.reverse()`: This method reverses the array in place, meaning the original array s is modified directly without using additional space for another array.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the length of the array. The `reverse` method iterates through the array and swaps elements, resulting in linear time complexity.

- Space complexity:
$O(1)$, as the `reverse` method operates in place and does not use additional space proportional to the size of the input.

[Code](./334-Reverse-String.ts)