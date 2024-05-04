# Intuition
To solve the problem of determining the minimum number of boats required to carry every person based on their weights and a weight limit per boat, we can use a two-pointer approach. This method is effective because it allows us to optimally decide which two people to pair together in a boat.

# Approach
1. Sort the Array: Sort the array of people by their weights. This helps in efficiently pairing the lightest person with the heaviest person that can fit with them in a boat.
2. Initialize Two Pointers: Start with two pointers, one pointing to the lightest person (`left`) and the other to the heaviest (`right`).
3. Greedy Pairing:
   - If the sum of the weights of the persons at these two pointers is less than or equal to the `limit`, it means both can share one boat. Move both pointers inward (i.e., `left++` and `right--`).
    - If they cannot share a boat (their combined weight exceeds the `limit`), the heavier person (at `right`) must go alone, and thus `right` is moved inward (`right--`).
4. Count Boats: Each successful pairing or single placement of a person into a boat increments the boat count.
5. Continue until all persons are accounted for: Repeat the process until the `left` pointer is greater than the `right` pointer.

# Complexity
- Time complexity:
$O(nlogn)$, where $n$ is the number of people. Sorting the people array takes $O(nlogn)$, and the while loop processes each person at most once, which is $O(n)$

- Space complexity:
$O(1)$, as the solution uses a constant amount of extra space, aside from the space needed to sort the array.

[Code](./881-Boats-to-Save-People.ts)