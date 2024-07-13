function intersect(nums1: number[], nums2: number[]): number[] {
    const countMap = new Map<number, number>()
    const result: number[] = []

    for (const num of nums1) {
        countMap.set(num, (countMap.get(num) || 0) + 1)
    }

    for (const num of nums2) {
        if (countMap.has(num) && countMap.get(num)! > 0) {
            result.push(num)
            countMap.set(num, countMap.get(num)! - 1)
        }
    }

    return result
}