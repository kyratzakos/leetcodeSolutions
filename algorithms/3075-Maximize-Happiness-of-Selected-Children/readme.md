# Intuition
The aim is to maximize the sum of happiness values from selecting `k` children, with the constraint that each successive child selected contributes slightly less to the total happiness due to a reduction factor (`selectedChildren`). This reduction reflects the decreasing marginal happiness as more children are selected, simulating a scenario where the overall contribution of each additional child diminishes.

# Approach
1. Sort the Happiness Array: Begin by sorting the `happiness` array in descending order to prioritize children with the highest initial happiness values for selection.
2. Initialize Variables: Set up variables for tracking the total happiness value (`happinessValue`), the number of children already selected (`selectedChildren`), and the index to navigate through the sorted happiness array.
3. Iteratively Select Children:
   - Use a loop to process up to `k` iterations, selecting one child per iteration.
   - For each child, calculate the adjusted happiness (`happiness[index] - selectedChildren`) and ensure it is not negative by taking the maximum with `0`. Add this value to `happinessValue`.
   - If a child's adjusted happiness becomes non-positive, break the loop to avoid negative contributions and unnecessary iterations.
4. Return the Result: After completing the loop, return the accumulated `happinessValue`, which represents the maximum total happiness achievable under the given constraints.

# Complexity
- Time complexity:
Overall, the total time complexity is $O(nlogn+k)$. Note that in the worst case, if `k` is greater than or equal to `n`, the complexity simplifies to $O(nlogn)$ because the loop’s upper bound becomes `n`.

- Space complexity:
The space complexity is $O(1)$ apart from the input array. No additional significant space is required as only a few auxiliary variables are used.

[Code](./3075-Maximize-Happiness-of-Selected-Children.ts)