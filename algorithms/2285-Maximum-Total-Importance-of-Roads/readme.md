# Intuition
To solve this problem, we need to maximize the total importance of all roads after assigning values optimally to the cities. The importance of a road is defined as the sum of the values of the two cities it connects.

# Approach
1. Degree Calculation: Calculate the degree of each city, which is the number of roads connected to the city.
2. Sort Cities by Degree: Sort the cities based on their degrees in descending order. The idea is to assign higher values to cities with higher degrees to maximize the total importance.
3. Assign Values: Assign values from $n$ down to 1 to the cities based on their sorted degrees.
4. Calculate Total Importance: Calculate the total importance of all roads using the assigned values.

# Complexity
- Time complexity:
$O(n~logn+m)$, where $n$ is the number of cities and $m$ is the number of roads. Sorting the cities takes $O(n~logn)$ and calculating the degrees and total importance takes $O(m)$.

- Space complexity:
$O(n)$, for storing the degrees, sorted cities, and assigned values.

[Code](./2285-Maximum-Total-Importance-of-Roads.ts)