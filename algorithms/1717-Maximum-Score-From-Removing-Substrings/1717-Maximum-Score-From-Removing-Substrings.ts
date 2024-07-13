function maximumGain(s: string, x: number, y: number): number {
    const processPattern = (s: string, pattern: string, points: number): [string, number] => {
        let stack: string[] = []
        let score = 0

        for (const char of s) {
            if (stack.length > 0 && stack[stack.length - 1] === pattern[0] && char === pattern[1]) {
                stack.pop()
                score += points
            } else {
                stack.push(char)
            }
        }

        return [stack.join(''), score]
    }

    let totalScore = 0

    if (x > y) {
        let [newS, points] = processPattern(s, 'ab', x)
        totalScore += points;
        [, points] = processPattern(newS, 'ba', y)
        totalScore += points
    } else {
        let [newS, points] = processPattern(s, 'ba', y)
        totalScore += points;
        [, points] = processPattern(newS, 'ab', x)
        totalScore += points
    }

    return totalScore
}