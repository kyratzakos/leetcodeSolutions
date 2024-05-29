function numSteps(s: string): number {
    let steps = 0

    while (s !== "1") {
        if (s[s.length - 1] === '0') {
            s = s.slice(0, -1)
        } else {
            let i = s.length - 1
            while (i >= 0 && s[i] === '1') {
                s = s.slice(0, i) + '0' + s.slice(i + 1)
                i--
            }
            if (i >= 0) {
                s = s.slice(0, i) + '1' + s.slice(i + 1)
            } else {
                s = '1' + s
            }
        }
        steps++
    }

    return steps
}
