# Intuition
To solve this problem, we need to check if we can rearrange the cards such that each group has `groupSize` consecutive cards. Here’s a structured approach to solve this:

# Approach
1. Count Frequencies: Use a `Map` to count the frequency of each card value.
2. Sort the Card Values: Sort the keys of the frequency map to process the cards in ascending order.
3. Form Groups: Try to form groups of `groupSize` consecutive cards using the frequency map. Reduce the count of each card as they are grouped.

# Complexity
- Time complexity:
$O(nlogn)$, where $n$ is the number of cards in the hand. The sorting step dominates the complexity. Counting the frequencies and forming groups are linear operations.

- Space complexity:
$O(n)$ for storing the card frequencies in the `Map`.

[Code](./846-Hand-of-Straights.ts)