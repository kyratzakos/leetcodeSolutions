# Intuition
To solve this problem, we need to simulate the process of serving customers in the restaurant. We'll calculate the total waiting time for each customer and then find the average waiting time.

# Approach
1. Initialize Variables:
   - `currentTime` to keep track of the current time in the simulation.
   - `totalWaitTime` to accumulate the total waiting time of all customers.
2. Iterate Over Customers:
   - For each customer, if their arrival time is greater than the current time, update `currentTime` to their arrival time.
   - Add the preparation time to `currentTime`.
   - Calculate the waiting time for the customer as the difference between `currentTime` and their arrival time, and add this to `totalWaitTime`.
3. Calculate Average Waiting Time: Divide `totalWaitTime` by the number of customers.

# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of customers. We iterate through the list of customers once.

- Space complexity:
$O(1)$, since we use a constant amount of extra space.

[Code](./1701-Average-Waiting-Time.ts)