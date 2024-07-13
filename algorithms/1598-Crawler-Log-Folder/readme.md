# Intuition
To solve this problem, we need to simulate the change folder operations and keep track of the current folder depth. We can achieve this by maintaining a counter that increments when moving to a child folder and decrements when moving to a parent folder. The counter will never go below zero because we cannot move above the main folder.

# Approach
1. Initialize a Depth Counter: Start with a counter set to zero to represent the main folder.
2. Iterate Over Logs for each operation:
   - If it is `"../"`, decrement the counter (if it is greater than zero).
   - If it is `"./"`, do nothing.
   - If it is a move to a child folder (any other string ending with `"/"`), increment the counter.
3. Return the Counter: After processing all the logs, the counter will represent the number of operations needed to return to the main folder.


# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of log entries. We iterate through each log entry once.

- Space complexity:
$O(1)$, since we are using a constant amount of extra space for the depth counter.

[Code](./1598-Crawler-Log-Folder.ts)