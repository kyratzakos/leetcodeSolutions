import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

interface Worker {
    quality: number
    wage: number
    ratio: number
}

function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
    const workers: Worker[] = quality.map((q, i) => ({ quality: q, wage: wage[i], ratio: wage[i] / q }))
    workers.sort((a, b) => a.ratio - b.ratio)

    let totalQuality = 0
    let minCost = Infinity
    const maxHeap = new MaxPriorityQueue<Worker>({
        priority: (worker: Worker) => worker.quality
    })

    for (let worker of workers) {

        maxHeap.enqueue(worker)
        totalQuality += worker.quality

        if (maxHeap.size() > k) {
            totalQuality -= maxHeap.dequeue().quality
        }

        if (maxHeap.size() === k) {
            minCost = Math.min(minCost, totalQuality * worker.ratio)
        }
    }

    return minCost
}

