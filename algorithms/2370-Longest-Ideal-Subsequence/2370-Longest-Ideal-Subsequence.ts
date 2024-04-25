function longestIdealString(s: string, k: number): number {
    let dp = new Array(26).fill(0)
    const charCodeA = 'a'.charCodeAt(0)

    for (let char of s) {
        let index = char.charCodeAt(0) - charCodeA
        let maxPrevLen = 0

        let start = Math.max(0, index - k)
        let end = Math.min(25, index + k)

        for (let i = start; i <= end; i++) {
            maxPrevLen = Math.max(maxPrevLen, dp[i])
        }

        dp[index] = maxPrevLen + 1
    }

    return Math.max(...dp)
}