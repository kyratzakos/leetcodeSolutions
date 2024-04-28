function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    const graph: number[][] = Array.from({ length: n }, () => [])
    const subtreeSize: number[] = new Array(n).fill(0)
    const result: number[] = new Array(n).fill(0)

    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }

    function dfs1(node: number, parent: number): void {
        for (const neighbor of graph[node]) {
            if (neighbor === parent) continue
            dfs1(neighbor, node)
            subtreeSize[node] += subtreeSize[neighbor]
            result[node] += result[neighbor] + subtreeSize[neighbor]
        }
        subtreeSize[node] += 1
    }

    function dfs2(node: number, parent: number): void {
        if (parent !== -1) {
            result[node] = result[parent] - subtreeSize[node] + (n - subtreeSize[node])
        }
        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                dfs2(neighbor, node)
            }
        }
    }

    dfs1(0, -1)
    dfs2(0, -1)

    return result
}