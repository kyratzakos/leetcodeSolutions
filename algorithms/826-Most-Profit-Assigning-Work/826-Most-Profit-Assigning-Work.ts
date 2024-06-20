function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    const jobs: [number, number][] = []
    for (let i = 0; i < difficulty.length; i++) {
        jobs.push([difficulty[i], profit[i]])
    }
    jobs.sort((a, b) => a[0] - b[0])

    worker.sort((a, b) => a - b)

    let maxProfit = 0
    let jobIndex = 0
    let currentMaxProfit = 0

    for (const ability of worker) {
        while (jobIndex < jobs.length && jobs[jobIndex][0] <= ability) {
            currentMaxProfit = Math.max(currentMaxProfit, jobs[jobIndex][1])
            jobIndex++
        }
        maxProfit += currentMaxProfit
    }

    return maxProfit
}