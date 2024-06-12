function replaceWords(dictionary: string[], sentence: string): string {
    const rootSet = new Set(dictionary)

    const words = sentence.split(' ')

    const replaceWithRoot = (word: string): string => {
        for (let i = 1; i <= word.length; i++) {
            const prefix = word.substring(0, i)
            if (rootSet.has(prefix)) {
                return prefix
            }
        }
        return word
    }

    const result = words.map(replaceWithRoot).join(' ')

    return result

}