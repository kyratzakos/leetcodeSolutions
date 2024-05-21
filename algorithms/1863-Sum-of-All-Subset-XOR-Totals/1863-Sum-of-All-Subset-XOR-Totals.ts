function subsetXORSum(nums: number[]): number {
    let totalXORSum = 0;

    function dfs(index: number, currentXOR: number): void {
        if (index === nums.length) {
            totalXORSum += currentXOR
            return
        }

        dfs(index + 1, currentXOR ^ nums[index])
        dfs(index + 1, currentXOR)
    }

    dfs(0, 0)

    return totalXORSum;

};