function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a, b) => b - a)
    let happinessValue = 0, selectedChildren = 0

    let index = 0
    while (k-- > 0) {
        happinessValue += Math.max((happiness[index] - selectedChildren), 0)
        if (happiness[index] - selectedChildren <= 0) {
            break
        }
        index++
        selectedChildren++
    }
    return happinessValue
};