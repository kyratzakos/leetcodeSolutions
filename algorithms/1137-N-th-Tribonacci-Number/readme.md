# Intuition
To solve the problem of computing the nth value of the Tribonacci sequence in TypeScript, you can use a straightforward dynamic programming approach. The Tribonacci sequence is similar to the Fibonacci sequence but, instead of summing the last two terms to get the next term, it sums the last three terms

# Approach
While the approach seems non scalable, it is highly efficient

# Complexity
- Time complexity:
The time complexity of this solution is $O(n)$ because it computes each value from 3 to n exactly once.

- Space complexity:
The space complexity is $O(1)$ because it uses only a constant amount of extra space regardless of the input size, i.e., the three variables `t0`, `t1`, `t2`, and `current`.

# Code
```
function tribonacci(n: number): number {
    if(n < 3){
        if(n === 2 || n === 1) return 1
        return 0
    }

    let t0 = 0, t1 = 1, t2 = 1
    let current = 0

    for(let i = 3; i <= n; i++) {
        current = t0 + t1 + t2
        t0 = t1
        t1 = t2
        t2 = current
    }

    return current
};
```