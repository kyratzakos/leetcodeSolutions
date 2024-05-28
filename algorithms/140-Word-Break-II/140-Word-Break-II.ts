function wordBreak(s: string, wordDict: string[]): string[] {
    const wordSet = new Set(wordDict)
    const memo: { [key: string]: string[] } = {}

    function backtrack(start: number): string[] {
        if (start === s.length) {
            return ['']
        }

        if (memo[start] !== undefined) {
            return memo[start]
        }

        const result: string[] = []

        for (let end = start + 1; end <= s.length; end++) {
            const word = s.substring(start, end)
            if (wordSet.has(word)) {
                const suffixes = backtrack(end)
                for (const suffix of suffixes) {
                    result.push(word + (suffix ? ' ' + suffix : ''))
                }
            }
        }

        memo[start] = result
        return result
    }

    return backtrack(0)
}
