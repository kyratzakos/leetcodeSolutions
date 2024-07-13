function getAncestors(n: number, edges: number[][]): number[][] {
    const graph: Array<number[]> = new Array(n).fill(0).map(() => [])
    const inDegree = new Array(n).fill(0)
    const ancestors = new Array(n).fill(0).map(() => new Set<number>())

    for (const [from, to] of edges) {
        graph[from].push(to)
        inDegree[to]++
    }

    const queue: number[] = []
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i)
        }
    }

    while (queue.length > 0) {
        const node = queue.shift()!
        for (const neighbor of graph[node]) {
            ancestors[neighbor].add(node)
            for (const ancestor of ancestors[node]) {
                ancestors[neighbor].add(ancestor)
            }
            inDegree[neighbor]--
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor)
            }
        }
    }

    const result = ancestors.map(ancestorSet => Array.from(ancestorSet).sort((a, b) => a - b))

    return result
}