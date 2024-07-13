function minOperations(logs: string[]): number {
    let minOperations = 0

    for (const log of logs) {
        if (log === "../") {
            if (minOperations > 0) {
                minOperations--
            }
        } else if (log !== "./") {
            minOperations++
        }
    }

    return minOperations
}