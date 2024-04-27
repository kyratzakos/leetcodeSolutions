function findRotateSteps(ring: string, key: string): number {
    const n = ring.length;
    const m = key.length;
    const pos = new Array(26).fill(0).map(() => new Array<number>());
    for (let i = 0; i < n; i++) {
        pos[ring.charCodeAt(i) - 97].push(i);
    }
    const dp = new Array(m).fill(0).map(() => new Array<number>(n).fill(Number.MAX_SAFE_INTEGER));
    for (const i of pos[key.charCodeAt(0) - 97]) {
        dp[0][i] = Math.min(i, n - i) + 1;
    }
    for (let i = 1; i < m; i++) {
        for (const j of pos[key.charCodeAt(i) - 97]) {
            for (const k of pos[key.charCodeAt(i - 1) - 97]) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + Math.min(Math.abs(j - k), n - Math.abs(j - k)) + 1);
            }
        }
    }
    return Math.min(...dp[m - 1]);
}