function singleNumber(nums: number[]): number[] {
    let xor = 0
    for (const num of nums) {
        xor ^= num
    }

    let diffBit = 1
    while ((xor & diffBit) === 0) {
        diffBit <<= 1
    }

    let num1 = 0, num2 = 0
    for (const num of nums) {
        if ((num & diffBit) === 0) {
            num1 ^= num
        } else {
            num2 ^= num
        }
    }

    return [num1, num2]
};