/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @desc   链表节点
 * @param  {ListNode} l1
 * @param  {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers1 (l1, l2) {
    // 原理：
    // 1. 判断两个链表对齐是否对齐，未对齐的补 0
    // 2. 将同位两数之和累加到其中一个链表的当前位
    // 3. 重复 1 和 2，直到遍历两个链表
    // 4. 返回累加后的链表

    let head = l1;
    while(l1 !== null || l2 !== null){
        // 两个链表，补 0 对齐下一位
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        // 计算同位数字之和
        let sum = val1 + val2;

        // 将和的个位数累加到 l1
        l1.val = sum % 10;

        // 高位数字进位
        if (sum >= 10 && l1.next) {
            l1.next.val += 1;
        } else if (sum >= 10 && !l1.next) {
            l1.next = new ListNode(1);
        }

        // 开始新一轮计算
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return head;
};


/**
 * @desc   链表节点
 * @param  {ListNode} l1
 * @param  {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers2 (l1, l2) {
    let pre = new ListNode(0);
    let cur = pre;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        // 数字相加
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);

        cur = cur.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        cur.next = new ListNode(carry);
    }

    return pre.next;
}



let l1 = new ListNode(6);
l1.next = new ListNode(5);
// l1.next.next = new ListNode(6);

let l2 = new ListNode(5);
// l2.next = new ListNode(5);
// l2.next.next = new ListNode(5);
// l2.next.next.next = new ListNode(6);

let result = addTwoNumbers2(l1, l2);

while (result) {
    console.log(result.val);
    result = result.next;
}
