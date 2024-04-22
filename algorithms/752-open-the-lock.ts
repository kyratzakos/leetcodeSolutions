type QueueItem = [string, number]

function openLock(deadends: string[], target: string): number {

    const dead = new Set(deadends)
    const visited = new Set<string>()
    const queue: QueueItem[] = []
    
    queue.push(['0000', 0])
    visited.add('0000')

    while (queue.length > 0) {
        const [current, steps] = queue.shift()!

        if(dead.has(current)) {
            continue
        }

        if(current === target) {
            return steps
        }

        for(let i = 0; i < 4; i++) {
            for(let move of [-1,1]) {
                const newSet = (parseInt(current[i], 10) + move + 10) % 10
                const newState = current.substring(0, i) + newSet + current.substring(i + 1)

                if(!visited.has(newState) && !dead.has(newState)) {
                    visited.add(newState)
                    queue.push([newState, steps + 1])
                }
            }
        }
    }

    return -1
}