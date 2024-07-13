function deleteAndEarn(nums: number[]): number {
    const freq = new Map<number, number>()
    let maxNum = 0

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
        maxNum = Math.max(maxNum, num)
    }

    const dp = new Array(maxNum + 1).fill(0)

    for (let i = 1; i <= maxNum; i++) {
        const points = (freq.get(i) || 0) * i
        if (i == 1) {
            dp[i] = points
        } else {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + points)
        }
    }

    return dp[maxNum]
}