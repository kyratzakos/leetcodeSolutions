function partition(s: string): string[][] {
    const result: string[][] = []
    const currentPartition: string[] = []

    function isPalindrome(start: number, end: number): boolean {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false
            }
            start++
            end--
        }
        return true
    }

    function backtrack(start: number) {
        if (start >= s.length) {
            result.push([...currentPartition]);
            return
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(start, end)) {
                currentPartition.push(s.substring(start, end + 1))
                backtrack(end + 1)
                currentPartition.pop()
            }
        }
    }

    backtrack(0)
    return result
};