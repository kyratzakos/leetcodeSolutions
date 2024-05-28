# Intuition
To solve this problem, we need to generate all possible attendance records of length n and count those that meet the criteria for eligibility. Given the constraints, a dynamic programming approach is suitable to handle the combinations efficiently.

# Approach
1. Dynamic Programming (DP): We'll use a DP table to store the number of valid sequences up to a given length, considering different states for the number of absences and consecutive lates.
2. State Representation: We'll define a state `(i, a, l)` where `i` is the length of the sequence, `a` is the number of absences, and `l` is the number of consecutive lates. Each state will store the count of valid sequences.
3. Transition: We'll transition from one state to the next by adding 'P', 'L', or 'A', while ensuring that the constraints are met.
4. Modulo Operation: Given the problem's constraints, we need to take the result modulo $10^9+7$.


# Complexity
- Time complexity:
$O(n)$ because we are iterating over each possible length and state.

- Space complexity:
$O(n)$ due to the DP table storing the counts for each state up to length `n`.

[Code](./552-Student-Attendance-Record-II.ts)