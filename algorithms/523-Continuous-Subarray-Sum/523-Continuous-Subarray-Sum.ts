function checkSubarraySum(nums: number[], k: number): boolean {
    const remainderIndexMap = new Map<number, number>()
    remainderIndexMap.set(0, -1)
    let prefixSum = 0

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i]
        const remainder = prefixSum % k

        if (remainderIndexMap.has(remainder)) {
            const prevIndex = remainderIndexMap.get(remainder)!
            if (i - prevIndex > 1) {
                return true
            }
        } else {
            remainderIndexMap.set(remainder, i)
        }
    }

    return false

}