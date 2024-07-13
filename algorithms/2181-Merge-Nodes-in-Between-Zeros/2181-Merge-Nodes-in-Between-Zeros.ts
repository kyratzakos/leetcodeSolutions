
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function mergeNodes(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(0)
    let current = dummy
    let sum = 0

    head = head.next

    while (head !== null) {
        if (head.val === 0) {
            if (sum !== 0) {
                current.next = new ListNode(sum)
                current = current.next
                sum = 0
            }
        } else {
            sum += head.val
        }
        head = head.next
    }

    return dummy.next
}