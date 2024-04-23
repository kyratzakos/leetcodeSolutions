function findMinHeightTrees(n: number, edges: number[][]): number[] {

    if(n === 1) return [0]
    let adjList = new Map<number, Set<number>>()

    for(let i = 0; i < n; i++){
        adjList.set(i, new Set())
    }

    for(let [u,v] of edges){
        adjList.get(u)!.add(v)
        adjList.get(v)!.add(u)
    }

    let leaves: number[] = []
    for(let [key, neighbors] of adjList.entries()) {
        if(neighbors.size === 1) leaves.push(key)
    }

    let remainingNodes = n
    while (remainingNodes > 2) {
        remainingNodes -= leaves.length
        const newLeaves: number[] = []

        for(let leaf of leaves) {
            let neighbor = adjList.get(leaf)!.values().next().value
            adjList.get(neighbor)!.delete(leaf)

            if(adjList.get(neighbor)!.size === 1) newLeaves.push(neighbor)
        }

        leaves = newLeaves
    }

    return leaves
};