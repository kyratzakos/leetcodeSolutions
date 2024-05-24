function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    const letterCount: number[] = new Array(26).fill(0)
    for (let letter of letters) {
        letterCount[letter.charCodeAt(0) - 97]++
    }

    const wordScores: number[] = words.map(word => {
        return word.split('').reduce((sum, char) => sum + score[char.charCodeAt(0) - 97], 0)
    })

    function backtrack(index: number, currentCount: number[], currentScore: number): number {
        if (index === words.length) {
            return currentScore;
        }

        let maxScore = backtrack(index + 1, currentCount, currentScore)

        let canInclude = true
        const tempCount = [...currentCount]
        for (let char of words[index]) {
            const charIndex = char.charCodeAt(0) - 97
            if (tempCount[charIndex] <= 0) {
                canInclude = false
                break
            }
            tempCount[charIndex]--
        }

        if (canInclude) {
            maxScore = Math.max(maxScore, backtrack(index + 1, tempCount, currentScore + wordScores[index]))
        }

        return maxScore
    }

    return backtrack(0, letterCount, 0)
};