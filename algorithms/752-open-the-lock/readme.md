# Intuition
To solve this problem, we can employ the Breadth-First Search (BFS) algorithm. The idea is to treat each combination of the lock as a node in a graph, and each possible turn of a wheel (either up or down) as an edge connecting nodes. BFS is well-suited for this problem because it explores nodes level by level, ensuring that we find the shortest path (minimum number of turns) from the initial node ('0000') to the target node (the unlock combination).

# Approach
1. Initialize a Queue for BFS that will store each state of the lock and the number of moves taken to reach that state.
2. Set Operations to generate all possible states from the current state.
3. Dead Ends and Visited Nodes: Ensure that we never visit a state that is either a dead end or has already been visited.
4. BFS Execution: Continue the BFS until we either find the target or exhaust all possibilities.

# Complexity
- Time complexity: The overall time complexity of the algorithm is $O(n)$, This assumes that hash table operations (used to check and store visited states and deadends) can be considered $O(1)$ on average, which is generally a reasonable assumption unless there are many hash collisions.

- Space complexity: The space complexity is also $O(n)$ because in the worst case, the algorithm needs to store all states in the data structures used for managing BFS and tracking visited states and deadends.

[Code](./752-open-the-lock.ts)