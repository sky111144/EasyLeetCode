### LeetCode：两数相加

#### 题目描述
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

#### 数据结构

``` JavaScript
/**
 * @desc   链表节点
 * @param  {Number}   val
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
```

#### 一、需要额外空间

##### （一）实现思路

1. 两个链表未对齐，就补 0。
2. 同位两数之和，累加到其中一个链表的当前位，并处理进位。
3. 重复 1 和 2，直到遍历完成。
4. 处理最后一位数的进位。
5. 返回累加后的链表。


##### （二）实现代码
``` JavaScript
/**
 * @desc   两数相加
 * @param  {ListNode} l1
 * @param  {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers (l1, l2) {
    let pre = new ListNode(0);
    let cur = pre;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        // 两个链表对齐
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        // 数字相加，进位
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);

        // 下一轮计算
        cur = cur.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // 两个链表遍历完成，处理最后一位数的进位
    if (carry > 0) {
        cur.next = new ListNode(carry);
    }

    return pre.next;
}
```

##### （三）复杂度分析
+ 时间复杂度：O(n)。时间复杂度，取决于两个链表的规模最大值 n。
+ 空间复杂度：O(n)。额外的链表长度，考虑到进位情况，长度至多是 n+1。


#### 二、无需额外空间

##### （一）实现思路

1. 两个链表未对齐，就补 0。
2. 同位两数之和，累加到其中一个链表的当前位，并处理进位。
3. 重复 1 和 2，直到遍历两个链表
4. 返回累加后的链表

##### （二）实现代码
``` JavaScript
/**
 * @desc   两数相加
 * @param  {ListNode} l1
 * @param  {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers (l1, l2) {
    let head = l1;
    while(l1 !== null || l2 !== null){
        // 两个链表对齐
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        // 数字相加，进位
        let sum = val1 + val2;
        l1.val = sum % 10;

        if (sum >= 10 && l1.next) {
            l1.next.val += 1;
        } else if (sum >= 10 && !l1.next) {
            l1.next = new ListNode(1);
        }

        // 下一轮计算
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return head;
}
```

##### （三）复杂度分析
+ 时间复杂度：O(n)。时间复杂度，取决于两个链表的规模最大值 n。
+ 空间复杂度：O(1)。复用了原来的链表，不需要新建链表。


> 本文采用 JavaScript 作为实现语言。
