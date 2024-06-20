function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    const n = profits.length
    const projects = Array.from({ length: n }, (_, i) => [capital[i], profits[i]])
    projects.sort((a, b) => a[0] - b[0])

    const maxHeap = new MaxHeap2()
    let currentCapital = w
    let i = 0

    for (let j = 0; j < k; j++) {
        while (i < n && projects[i][0] <= currentCapital) {
            maxHeap.insert(projects[i][1])
            i++
        }

        const maxProfit = maxHeap.extractMax()
        if (maxProfit === undefined) break

        currentCapital += maxProfit
    }

    return currentCapital
}

class MaxHeap2 {
    private heap: number[]

    constructor() {
        this.heap = []
    }

    public insert(value: number): void {
        this.heap.push(value)
        this.bubbleUp(this.heap.length - 1)
    }

    public extractMax(): number | undefined {
        if (this.heap.length === 0) return undefined
        if (this.heap.length === 1) return this.heap.pop()

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()!
        this.bubbleDown(0)

        return max
    }

    public peek(): number | undefined {
        return this.heap[0]
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[index] <= this.heap[parentIndex]) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
        }
    }

    private bubbleDown(index: number): void {
        const length = this.heap.length
        const element = this.heap[index]

        while (true) {
            const leftChildIndex = 2 * index + 1
            const rightChildIndex = 2 * index + 2
            let leftChild, rightChild
            let swap: number | undefined

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex]
                if (leftChild > element) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex]
                if (
                    (swap === undefined && rightChild > element) ||
                    (swap !== undefined && rightChild > leftChild!)
                ) {
                    swap = rightChildIndex
                }
            }

            if (swap === undefined) break;

            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]]
            index = swap
        }
    }
}