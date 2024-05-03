function compareVersion(version1: string, version2: string): number {
    const v1 = version1.split('.')
    const v2 = version2.split('.')
    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        const val1 = parseInt(v1[i] ?? '0')
        const val2 = parseInt(v2[i] ?? '0')
        if (val1 !== val2) {
            return val1 > val2 ? 1 : -1
        }
    }
    return 0
}