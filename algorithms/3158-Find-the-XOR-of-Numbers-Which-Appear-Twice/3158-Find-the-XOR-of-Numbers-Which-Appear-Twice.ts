function duplicateNumbersXOR(nums: number[]): number {
    const frequencyArray: number[] = [];
    const set = new Set<number>();
    for (const element of nums) {
        if (set.has(element)) {
            frequencyArray.push(element);
        } else {
            set.add(element);
        }
    }
    return frequencyArray.reduce((a, b) => a ^ b, 0)

};