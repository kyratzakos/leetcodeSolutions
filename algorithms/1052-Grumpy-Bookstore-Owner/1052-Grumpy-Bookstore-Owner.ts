function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    const n = customers.length
    let initialSatisfied = 0
    let maxAdditionalSatisfied = 0
    let currentWindowAdditionalSatisfied = 0

    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 0) {
            initialSatisfied += customers[i]
        }
    }

    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 1) {
            currentWindowAdditionalSatisfied += customers[i]
        }
        if (i >= minutes && grumpy[i - minutes] === 1) {
            currentWindowAdditionalSatisfied -= customers[i - minutes]
        }
        maxAdditionalSatisfied = Math.max(maxAdditionalSatisfied, currentWindowAdditionalSatisfied)
    }

    return initialSatisfied + maxAdditionalSatisfied
}