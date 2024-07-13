interface Robot {
    position: number
    health: number
    direction: string
    index: number
}

function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    const robots: Robot[] = positions.map((pos, idx) => ({
        position: pos,
        health: healths[idx],
        direction: directions[idx],
        index: idx,
    }))

    robots.sort((a, b) => a.position - b.position)

    const stack: Robot[] = []
    const survived: Set<number> = new Set()

    for (const robot of robots) {
        if (robot.direction === 'R') {
            stack.push(robot)
        } else {
            while (stack.length > 0 && robot.health > 0) {
                const top = stack[stack.length - 1]
                if (top.health > robot.health) {
                    top.health -= 1
                    robot.health = 0
                } else if (top.health < robot.health) {
                    robot.health -= 1
                    stack.pop()
                } else {
                    stack.pop()
                    robot.health = 0
                }
            }
            if (robot.health > 0) {
                survived.add(robot.index)
            }
        }
    }

    for (const robot of stack) {
        survived.add(robot.index)
    }

    const result: number[] = new Array(positions.length).fill(0)
    for (const robot of robots) {
        if (survived.has(robot.index)) {
            result[robot.index] = robot.health
        }
    }

    return result.filter(health => health > 0)
};
