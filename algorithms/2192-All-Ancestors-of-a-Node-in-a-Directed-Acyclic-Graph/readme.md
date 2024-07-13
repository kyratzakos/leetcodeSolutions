# Intuition
To solve the problem of finding the ancestors of each node in a Directed Acyclic Graph (DAG), we need to use Depth-First Search (DFS) to explore all the nodes and their ancestors. Here's a structured approach to solve the problem:

# Approach
1. Build the Graph: Use an adjacency list to represent the graph.
2. Topological Sorting: Perform a topological sort to determine the order in which nodes should be processed.
3. DFS for Ancestors: Use DFS to find all ancestors for each node, leveraging the topological order to ensure nodes are processed in a way that guarantees all ancestors are considered before the node itself.


# Complexity
- Time complexity:
$O(n+m)$, where $n$ is the number of nodes and $m$ is the number of edges. Building the graph, topological sorting, and processing ancestors all take linear time relative to the size of the graph.

- Space complexity:
$O(n+m)$, for storing the graph, in-degrees, and ancestors.

[Code](./2192-All-Ancestors-of-a-Node-in-a-Directed-Acyclic-Graph.ts)