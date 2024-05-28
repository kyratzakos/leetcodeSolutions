function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {
    let indexesOfX: number[] = []

    for (let [index, num] of nums.entries()) {
        if (num === x) {
            indexesOfX.push(index)
        }
    }

    let answer: number[] = []
    for (let query of queries) {
        if (query > indexesOfX.length) {
            answer.push(-1)
        } else {
            answer.push(indexesOfX[query - 1])
        }
    }
    return answer

};