function beautifulSubsets(nums: number[], k: number): number {
    let count = 0
    const freqMap: Map<number, number> = new Map()

    function backtrack(index: number) {
        if (index === nums.length) {
            return
        }

        let canInclude = true
        if (freqMap.has(nums[index] - k) && freqMap.get(nums[index] - k)! > 0) {
            canInclude = false
        }
        if (freqMap.has(nums[index] + k) && freqMap.get(nums[index] + k)! > 0) {
            canInclude = false
        }

        if (canInclude) {
            freqMap.set(nums[index], (freqMap.get(nums[index]) || 0) + 1)
            count++
            backtrack(index + 1)

            freqMap.set(nums[index], freqMap.get(nums[index])! - 1)
            if (freqMap.get(nums[index]) === 0) {
                freqMap.delete(nums[index])
            }
        }

        backtrack(index + 1)
    }

    backtrack(0)
    return count
};