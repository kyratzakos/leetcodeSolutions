
//   Definition for singly - linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null
    let curr: ListNode | null = head
    while (curr !== null) {
        const next: ListNode | null = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

function removeNodes(head: ListNode | null): ListNode | null {
    head = reverseList(head)
    let maxVal = -Infinity
    let dummy = new ListNode(0)
    let tail = dummy

    while (head !== null) {
        if (head.val >= maxVal) {
            tail.next = new ListNode(head.val)
            tail = tail.next
            maxVal = head.val
        }
        head = head.next
    }

    return reverseList(dummy.next)
};