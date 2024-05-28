function equalSubstring(s: string, t: string, maxCost: number): number {
    const n = s.length
    let start = 0, end = 0, totalCost = 0, maxLength = 0

    while (end < n) {
        totalCost += Math.abs(s.charCodeAt(end) - t.charCodeAt(end))

        while (totalCost > maxCost) {
            totalCost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start))
            start++
        }

        maxLength = Math.max(maxLength, end - start + 1)

        end++
    }

    return maxLength
};