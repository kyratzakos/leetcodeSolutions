class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    if (!head || !head.next || !head.next.next) return [-1, -1]

    let prev: ListNode | null = head
    let curr: ListNode | null = head.next
    let next: ListNode | null = head.next.next
    let positions: number[] = []
    let index = 1

    while (next !== null) {
        if ((curr.val > prev!.val && curr.val > next.val) || (curr.val < prev!.val && curr.val < next.val)) {
            positions.push(index)
        }
        prev = curr
        curr = next
        next = next.next
        index++
    }

    if (positions.length < 2) return [-1, -1]

    let minDistance = Infinity
    let maxDistance = positions[positions.length - 1] - positions[0]

    for (let i = 1; i < positions.length; i++) {
        minDistance = Math.min(minDistance, positions[i] - positions[i - 1])
    }

    return [minDistance, maxDistance]
}