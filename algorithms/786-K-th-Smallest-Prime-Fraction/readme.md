# Intuition
The goal is to find the k-th smallest fraction that can be formed from the elements of a given sorted array where each fraction is of the form `a/b` with `a` and `b` being elements of the array and `a < b`. Instead of generating all possible fractions, which would be computationally expensive, the solution uses a binary search on the possible values of these fractions to efficiently find the k-th smallest.

# Approach
1. Initialization: The search space for the fraction values (left to right) is initially set between 0 and 1, as no fraction formed by two positive integers can be smaller than 0 or greater than 1.
2. Binary Search: The algorithm uses a binary search over the range of possible fraction values:
   - Calculate the middle point mid of the current search range.
   - For each element i in the array, find the smallest element j such that the fraction arr[i]/arr[j] is less than mid. This helps in counting how many fractions are smaller than mid.
   - Count the total number of valid fractions (total) that are less than the mid value.
   - Track the largest fraction less than mid seen so far (maxFrac) and store its numerator and denominator indices.
3. Adjusting Search Space:
   - If total equals k, then the largest fraction (maxFrac) under mid is the result.
   - If total is greater than k, decrease right to mid to search the lower half for smaller fractions.
   - If total is less than k, increase left to mid to search the upper half for larger fractions.
4. Stopping Condition: The loop continues until left exceeds right, at which point the fraction corresponding to the last recorded maxFrac is the k-th smallest.

# Complexity
- Time complexity:
Each iteration of the binary search halves the search space. The binary search takes $O(log(maxValue))$ iterations where `maxValue` could loosely be represented as the difference between the maximum and minimum possible fraction values, typically calculated over the range [0,1] but with precision affecting the actual number of iterations. Within each iteration, the algorithm runs a loop over all elements of the array and potentially another nested loop to find the correct j. This makes the worst-case complexity $O(nlogn)$ for each binary search iteration, leading to a total complexity of $O(nlognlog(maxValue))$

- Space complexity:
The space used is $O(1)$ as only a fixed number of variables are used regardless of the input size, except for the output which is a constant size array.

[Code](./786-K-th-Smallest-Prime-Fraction.ts)