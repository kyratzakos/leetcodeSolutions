# Intuition
The function `findMaximizedCapital` is designed to maximize capital by selecting projects based on their profitability and initial capital requirements. Given `k` projects that can be completed, starting capital `w`, and arrays detailing the profits and capital requirements for each project, the function aims to strategically pick projects to maximize returns. The main strategy involves using a greedy approach prioritized by profit while ensuring that each project selected is affordable with the current capital.

# Approach
1. Prepare Project List:
   - Combine the `capital` and `profits` into a single list of projects. Each project is represented as an array with the capital requirement and profit.
   - Sort the projects list by capital requirement to easily identify which projects can be started given the current available capital.
2. Initialize Data Structures:
   - Use a max heap (priority queue) to keep track of the most profitable projects available within the current capital constraints.
   - Start with the initial capital `w`.
3. Select Projects:
   - Iterate up to `k` times, representing the maximum number of projects that can be selected.
   - For each iteration, check if more projects (based on sorted list) can be undertaken with the current capital. Add those projects' profits to the max heap.
   - Extract the maximum profit from the max heap (the most profitable project that can be started with the available capital) and add it to the current capital.
   - If no projects are available in the max heap when needed, break out of the loop early.
4. Return the Final Capital:
   - After up to `k` iterations, or if no more profitable projects can be undertaken, return the accumulated capital.


# Complexity
- Time complexity:
The overall time complexity is $O(nlogn+klogn)$. Considering $k$ could be as large as $n$, this simplifies to $O(nlogn)$. Where $n$ is the number of `projects` and `k` the number of iterations

- Space complexity:
$O(n)$ for storing the `projects` list and the heap which can potentially contain all projects at its maximum size.

[Code](./502-IPO.ts)