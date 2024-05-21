class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
    }
}

function distributeCoins(root: TreeNode | null): number {
    let totalMoves = 0

    function dfs(node: TreeNode | null): number {
        if (node === null) return 0

        const leftExcess = dfs(node.left)
        const rightExcess = dfs(node.right)

        totalMoves += Math.abs(leftExcess) + Math.abs(rightExcess)

        const currentExcess = node.val + leftExcess + rightExcess - 1

        return currentExcess
    }

    dfs(root)
    return totalMoves
};