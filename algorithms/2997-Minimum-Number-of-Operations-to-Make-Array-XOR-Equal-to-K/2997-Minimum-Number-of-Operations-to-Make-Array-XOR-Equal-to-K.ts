function minOperations(nums: number[], k: number): number {
    let xorSum = 0

    for (let num of nums) {
        xorSum ^= num
    }

    let xorDiff = xorSum ^ k

    let countFlips = 0
    while (xorDiff > 0) {
        countFlips += xorDiff & 1
        xorDiff >>= 1
    }

    return countFlips

}