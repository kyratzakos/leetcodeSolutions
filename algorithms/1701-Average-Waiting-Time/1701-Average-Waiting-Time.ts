function averageWaitingTime(customers: number[][]): number {
    let currentTime = 0
    let totalWaitTime = 0

    for (const [arrival, time] of customers) {

        currentTime = Math.max(currentTime, arrival) + time

        const waitTime = currentTime - arrival
        totalWaitTime += waitTime
    }

    return totalWaitTime / customers.length
}