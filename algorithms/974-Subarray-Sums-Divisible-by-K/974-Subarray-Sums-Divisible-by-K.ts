function subarraysDivByK(nums: number[], k: number): number {
    const remainderCount = new Map<number, number>()
    remainderCount.set(0, 1)

    let prefixSum = 0
    let count = 0

    for (const num of nums) {
        prefixSum += num
        let remainder = ((prefixSum % k) + k) % k

        if (remainderCount.has(remainder)) {
            count += remainderCount.get(remainder)!
        }

        remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1)
    }

    return count
}