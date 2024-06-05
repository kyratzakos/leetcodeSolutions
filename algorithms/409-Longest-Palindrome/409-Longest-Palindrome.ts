function longestPalindrome(s: string): number {
    const charCount = new Map<string, number>()

    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1)
    }

    let palindromeLength = 0
    let hasOddFrequency = false

    for (const count of charCount.values()) {
        if (count % 2 === 0) {
            palindromeLength += count
        } else {
            palindromeLength += count - 1
            hasOddFrequency = true
        }
    }

    if (hasOddFrequency) {
        palindromeLength += 1
    }

    return palindromeLength

};