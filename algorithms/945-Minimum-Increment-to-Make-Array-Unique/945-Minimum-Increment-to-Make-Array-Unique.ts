function minIncrementForUnique(nums: number[]): number {
    nums.sort((a, b) => a - b)

    let moves = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            const increment = nums[i - 1] - nums[i] + 1
            nums[i] += increment
            moves += increment
        }
    }

    return moves

}