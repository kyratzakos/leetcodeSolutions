function maximumImportance(n: number, roads: number[][]): number {
    const degrees = new Array(n).fill(0)

    for (const [a, b] of roads) {
        degrees[a]++
        degrees[b]++
    }

    const cities = Array.from({ length: n }, (_, i) => i)
    cities.sort((a, b) => degrees[b] - degrees[a])

    const values = new Array(n)
    for (let i = 0; i < n; i++) {
        values[cities[i]] = n - i
    }

    let totalImportance = 0
    for (const [a, b] of roads) {
        totalImportance += values[a] + values[b]
    }

    return totalImportance
}