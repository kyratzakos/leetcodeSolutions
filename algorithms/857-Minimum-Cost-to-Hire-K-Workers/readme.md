# Intuition
To solve this problem, you need to understand that the total payment to workers is determined by choosing one worker's wage expectation as the baseline and adjusting payments for all other workers based on their quality ratio to this worker. The goal is to find the least costly configuration of any k workers meeting their wage expectations.

# Approach
1. Ratio of Wage to Quality: Each worker's wage expectation gives a ratio of wage to quality (`wage[i] / quality[i]`). This ratio dictates the minimum acceptable pay per unit of quality for that worker.
2. Choosing the Base Worker: By sorting workers by this ratio, we can start by considering the worker with the lowest ratio as the baseline and calculate the total payment if we hire workers with k highest qualities so far considered.
3. Use of a Max-Heap: To efficiently maintain and calculate the sum of the k highest qualities while iterating through the sorted list of workers, a max-heap (or priority queue) is useful. The heap helps quickly adjust which workers' qualities are considered as we potentially add new workers into the calculation.
4. Minimum Total Payment Calculation: For each worker in the sorted list, consider them as the potential baseline for payment calculations, compute the total cost if that worker's wage-to-quality ratio was used for all workers, and check if this total cost is the minimum found so far.

# Complexity
- Time complexity:
$O(nlogn)$ due to sorting and potentially $O(nlogk)$ for each insertion into and deletion from the heap.

- Space complexity:
$O(n)$ for storing worker data and $O(k)$ for the heap.

[Code](./857-Minimum-Cost-to-Hire-K-Workers.ts)