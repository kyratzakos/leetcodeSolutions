class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function bstToGst(root: TreeNode | null): TreeNode | null {
    let cumulativeSum = 0

    function reverseInOrder(node: TreeNode | null): void {
        if (node === null) {
            return
        }

        reverseInOrder(node.right)

        cumulativeSum += node.val
        node.val = cumulativeSum

        reverseInOrder(node.left)
    }

    reverseInOrder(root)
    return root
}