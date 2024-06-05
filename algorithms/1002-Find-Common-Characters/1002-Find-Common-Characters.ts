function commonChars(words: string[]): string[] {
    const minFreq = new Array(26).fill(Infinity)

    for (const word of words) {
        const charFreq = new Array(26).fill(0)
        for (const char of word) {
            charFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        for (let i = 0; i < 26; i++) {
            minFreq[i] = Math.min(minFreq[i], charFreq[i])
        }
    }

    const result: string[] = []
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < minFreq[i]; j++) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)))
        }
    }

    return result

};