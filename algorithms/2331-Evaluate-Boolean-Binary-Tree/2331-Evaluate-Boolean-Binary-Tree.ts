class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
    }
}


function evaluateTree(root: TreeNode): boolean {
    if (!root.left && !root.right) {
        return root.val === 1
    }

    const leftEval = evaluateTree(root.left!)
    const rightEval = evaluateTree(root.right!)

    if (root.val === 2) {
        return leftEval || rightEval
    } else if (root.val === 3) {
        return leftEval && rightEval
    }

    throw new Error('Invalid node value')
}