function minPatches(nums: number[], n: number): number {
    let patches = 0
    let i = 0
    let maxReach = 0

    while (maxReach < n) {
        if (i < nums.length && nums[i] <= maxReach + 1) {
            maxReach += nums[i]
            i++
        } else {
            patches++
            maxReach += maxReach + 1
        }
    }

    return patches
}