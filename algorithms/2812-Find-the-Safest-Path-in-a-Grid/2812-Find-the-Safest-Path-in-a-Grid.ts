function maximumSafenessFactor(grid: number[][]): number {
    const n = grid.length
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity))
    const queue: [number, number][] = []

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0
                queue.push([r, c])
            }
        }
    }

    while (queue.length > 0) {
        const [r, c] = queue.shift()!
        for (const [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc
            if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] === Infinity) {
                dist[nr][nc] = dist[r][c] + 1
                queue.push([nr, nc])
            }
        }
    }

    const maxHeap = new MaxHeap<[number, number, number]>((a, b) => a[0] - b[0])
    const maxSafeness = Array.from({ length: n }, () => Array(n).fill(-Infinity))
    maxHeap.push([dist[0][0], 0, 0])
    maxSafeness[0][0] = dist[0][0]

    while (maxHeap.size() > 0) {
        const [currentSafeness, r, c] = maxHeap.pop()
        for (const [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc
            if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                const newSafeness = Math.min(currentSafeness, dist[nr][nc])
                if (newSafeness > maxSafeness[nr][nc]) {
                    maxSafeness[nr][nc] = newSafeness
                    maxHeap.push([newSafeness, nr, nc])
                }
            }
        }
    }

    return maxSafeness[n - 1][n - 1]

}

class MaxHeap<T> {
    private data: T[] = []
    private comparator: (a: T, b: T) => number

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator
    }

    push(value: T) {
        this.data.push(value)
        this.bubbleUp()
    }

    pop(): T {
        if (this.size() === 1) return this.data.pop()!
        const root = this.data[0]
        this.data[0] = this.data.pop()!
        this.bubbleDown()
        return root
    }

    peek(): T {
        return this.data[0]
    }

    size(): number {
        return this.data.length
    }

    private bubbleUp() {
        let index = this.data.length - 1
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            if (this.comparator(this.data[index], this.data[parentIndex]) <= 0) break
            [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]]
            index = parentIndex
        }
    }

    private bubbleDown() {
        let index = 0
        const length = this.data.length
        const element = this.data[0]

        while (true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let leftChild, rightChild
            let swap

            if (leftChildIndex < length) {
                leftChild = this.data[leftChildIndex]
                if (this.comparator(leftChild, element) > 0) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.data[rightChildIndex]
                if (
                    (swap === null && this.comparator(rightChild, element) > 0) ||
                    (swap !== null && this.comparator(rightChild, leftChild!) > 0)
                ) {
                    swap = rightChildIndex
                }
            }

            if (swap === null) break
            this.data[index] = this.data[swap]
            this.data[swap] = element
            index = swap
        }
    }
}