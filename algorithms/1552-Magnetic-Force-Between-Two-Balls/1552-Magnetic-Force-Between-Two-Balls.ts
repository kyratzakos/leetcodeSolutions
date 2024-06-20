function maxDistance(position: number[], m: number): number {
    position.sort((a, b) => a - b)

    let left = 1
    let right = position[position.length - 1] - position[0]

    const canPlaceBalls = (minDist: number): boolean => {
        let count = 1
        let lastPos = position[0]

        for (let i = 1; i < position.length; i++) {
            if (position[i] - lastPos >= minDist) {
                count++
                lastPos = position[i]
                if (count === m) {
                    return true
                }
            }
        }

        return count >= m
    }

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2)
        if (canPlaceBalls(mid)) {
            left = mid
        } else {
            right = mid - 1
        }
    }

    return left
}