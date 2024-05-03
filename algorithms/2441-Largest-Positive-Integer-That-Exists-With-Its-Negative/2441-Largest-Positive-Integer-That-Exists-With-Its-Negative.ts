function findMaxK(nums: number[]): number {

    let number = -1

    nums.forEach((n) => {
        if (n > 0 && nums.find((element) => element === -n) && n > number) {
            number = n
        }
    })

    return number
}