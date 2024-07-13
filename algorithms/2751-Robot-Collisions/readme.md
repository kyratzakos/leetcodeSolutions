# Intuition
To solve this problem, we need to simulate the movement and collisions of robots on a line. The key challenge is to correctly handle the collisions between robots moving towards each other. We'll approach this by considering each robot's movement and using a stack to manage collisions efficiently.

# Approach
1. Sort Robots by Position: Since the positions are unique and unsorted, we need to sort the robots by their initial positions to handle collisions correctly.
2. Simulate Movements and Collisions:
   - Use a stack to keep track of robots moving to the right ('R').
   - For each robot moving to the left ('L'), check if there are any robots in the stack (moving to the right) that it will collide with.
   - Handle collisions according to the rules provided (remove robots with lower health, decrement health for the surviving robot, remove both if health is equal).
3. Collect Survivors: After processing all robots, collect the healths of the surviving robots in the original order.


# Complexity
- Time complexity:
$O(nlogn)$ due to the sorting step, where $n$ is the number of robots. The subsequent processing is $O(n)$.

- Space complexity:
$O(n)$ for storing the robot information and the stack.

[Code](./2751-Robot-Collisions.ts)