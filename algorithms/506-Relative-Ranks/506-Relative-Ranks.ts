function findRelativeRanks(score: number[]): string[] {
    const indexedScores = score.map((value, index) => ({ value, index }))

    indexedScores.sort((a, b) => b.value - a.value)

    const ranks = new Array<string>(score.length)

    for (let i = 0; i < indexedScores.length; i++) {
        if (i === 0) {
            ranks[indexedScores[i].index] = "Gold Medal"
        } else if (i === 1) {
            ranks[indexedScores[i].index] = "Silver Medal"
        } else if (i === 2) {
            ranks[indexedScores[i].index] = "Bronze Medal"
        } else {
            ranks[indexedScores[i].index] = (i + 1).toString()
        }
    }

    return ranks
}