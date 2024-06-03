# Intuition
To solve this problem in linear runtime complexity and with constant extra space, we can use the properties of the XOR operation.

# Approach
1. XOR All Numbers: XORing all the numbers in the array will cancel out the numbers that appear twice, leaving the XOR of the two unique numbers.
2. Find a Differentiating Bit: Find a bit that is set in the result of the XOR. This bit will be different between the two unique numbers.
3. Partition the Numbers: Use this differentiating bit to partition the numbers into two groups. Each group will contain one of the unique numbers and the numbers that appear twice.
4. XOR the Groups Separately: XORing all the numbers in each group will give one of the unique numbers.


# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of elements in the array. We iterate through the array three times (for XORing all numbers, finding the differentiating bit, and partitioning the numbers).

- Space complexity:
$O(1)$, using only a constant amount of extra space for variables.

[Code](./260-Single-Number-III.ts)