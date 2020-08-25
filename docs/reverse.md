### LeetCode：反转链表

#### 题目描述

反转一个单链表。

#### 一、迭代法

##### （一）实现思路

使用双指针遍历当前链表，从头节点开始，反转每个节点。

##### （二）实现代码

``` JavaScript
/**
 * @desc   反转链表
 * @param  {ListNode} head 链表第一个节点
 * @return {ListNode}
 */
function reverseLinkedList (head) {
    // 处理异常情况
    if (head === null || head.next === null) {
        return head;
    }

    // 定义双指针
    let first = head;
    let second = first.next;

    // 使用双指针遍历和反转链表
    while (second) {
        let swap = second.next;

        // 反转链表
        second.next = first;

        // 指针后移
        first = second;
        second = swap;
    }

    // 反转头节点
    head.next = second;

    return first;
}
```

##### 复杂度分析

+ 时间复杂度：O(n)。链表长度为 n，只需要从头遍历链表，所以时间复杂度为 O(n)。

+ 空间复杂度：O(1)。没有使用额外内存空间。


#### 二、递归法

##### （一）实现思路

递归到当前链表尾节点，从尾节点开始，反转每个节点。

##### （二）实现代码

``` JavaScript
/**
 * @desc   反转链表
 * @param  {ListNode} head 链表第一个节点
 * @return {ListNode}
 */
function reverseLinkedList (head) {
    // 递归终止条件
    if (head === null || head.next === null) {
        return head;
    }

    // 递归调用，遍历链表
    let result = reverseLinkedList(head.next);

    // 反转链表
    head.next.next = head;
    head.next = null;

    // 返回链表尾节点，亦反转链表的头节点
    return result;
}
```


##### （三）复杂度分析

+ 时间复杂度：O(n)。链表长度为 n，只需要递归遍历链表，时间复杂度为 O(n)。

+ 空间复杂度：O(n)。链表长度为 n，递归深度 n 层。虽然没有声明额外内存空间，但是递归调用，本身需要递归栈保存栈的状态。


> 本文采用 JavaScript 作为实现语言。
