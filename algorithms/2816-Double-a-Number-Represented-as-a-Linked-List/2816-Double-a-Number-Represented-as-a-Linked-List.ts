
//   Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function doubleIt(head: ListNode | null): ListNode | null {
    if (head.val > 4) {
        head = new ListNode(0, head)
    }
    let n = head
    do {
        n.val *= 2
        n.val %= 10
        n.val += n.next?.val > 4 ? 1 : 0
    } while (n = n.next)
    return head
};