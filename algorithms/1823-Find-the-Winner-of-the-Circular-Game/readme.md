# Intuition
This problem can be solved using a well-known algorithm called the Josephus problem. The Josephus problem is a theoretical problem related to a certain elimination game.

# Approach
1. Recursive Solution:
   - The Josephus problem can be defined recursively. Let J(n, k) be the position of the winner in a game with n people and a step count k.
   - The recursive formula is: $$J(n,k)=(J(n−1,k)+k)%n$$ where J(1, k) = 0 because with one person, the winner is always the first person (index 0).
2. Convert to 1-based Indexing: The above formula gives us a 0-based index result. To convert it to a 1-based index, we simply add 1 to the result.
3. Iterative Solution: An iterative approach can also be used, which avoids the overhead of recursion and is more efficient in terms of memory usage.


# Complexity
- Time complexity:
$O(n)$, where $n$ is the number of people. We iterate once from 2 to `n`.

- Space complexity:
$O(1)$, as we only use a constant amount of additional space.

# Code
```
function findTheWinner(n: number, k: number): number {
    let winner = 0
    for (let i = 2; i <= n; i++) {
        winner = (winner + k) % i
    }
    return winner + 1
}
```