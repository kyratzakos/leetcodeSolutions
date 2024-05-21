function subsets(nums: number[]): number[][] {
    const result: number[][] = []
    const currentSubset: number[] = []

    function backtrack(start: number) {
        result.push([...currentSubset])

        for (let i = start; i < nums.length; i++) {
            currentSubset.push(nums[i])

            backtrack(i + 1)
            currentSubset.pop()
        }
    }

    backtrack(0)
    return result
};