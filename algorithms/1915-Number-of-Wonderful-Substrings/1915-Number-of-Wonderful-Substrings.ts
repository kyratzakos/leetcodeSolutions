function wonderfulSubstrings(word: string): number {
    const countByMask: { [key: number]: number } = { 0: 1 }
    let currentMask = 0
    let totalCount = 0

    for (const char of word) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0)

        currentMask ^= (1 << index)

        if (countByMask[currentMask]) {
            totalCount += countByMask[currentMask]
        }

        for (let i = 0; i < 10; i++) {
            const toggledMask = currentMask ^ (1 << i)
            if (countByMask[toggledMask]) {
                totalCount += countByMask[toggledMask]
            }
        }

        if (countByMask[currentMask]) {
            countByMask[currentMask]++
        } else {
            countByMask[currentMask] = 1
        }
    }

    return totalCount
}