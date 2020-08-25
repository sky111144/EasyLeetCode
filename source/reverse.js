let types = {
    ARRAY: "[object Array]",
    LIST_NODE: "[object ListNode]",
    NULL: "[object Null]"
}

function typeOf (target) {
    if (target instanceof Object) {
        return `[object ${target.constructor.name}]`;
    }
    return Object.prototype.toString.call(target);
}

function isArray (target) {
    return typeOf(target) === types.ARRAY;
}

function isListNode (target) {
    return typeOf(target) === types.LIST_NODE;
}

function isNull (target) {
    return typeOf(target) === types.NULL;
}


/**
 * @desc   链表节点
 * @param  {any} val
 * @return {ListNode}
 */
function ListNode (val) {
    this.val = val;
    this.next = null;
    this.show = function () {
        let exposedStr = "";
        let cur = this;

        while (cur) {
            exposedStr += `${cur.val}${cur.next ? ' --> ' : ''}`;
            cur = cur.next;
        }

        console.log(exposedStr);
    }
}

/**
 * @desc   使用数组生成链表
 * @param  {Array} arr
 * @return {ListNode}
 */
function generateListNodeFromArray (arr) {
    if (!isArray(arr)) {
        return new ListNode(0);
    }

    let head = null;
    let current = head;

    while (arr.length) {
        if (isNull(current)) {
            current = new ListNode(arr.shift());
            head = current;
        } else if (isListNode(current)) {
            current.next = new ListNode(arr.shift());
            current = current.next;
        }
    }

    return head;
}

/**
 * @desc   反转链表
 * @param  {ListNode} head 链表第一个节点
 * @return {ListNode}
 */
function reverseLinkedList1 (head) {
    if (head === null || head.next === null) {
        return head;
    }

    let first = head;
    let second = first.next;

    while (second) {
        let swap = second.next;

        second.next = first;

        first = second;
        second = swap;
    }

    head.next = second;
    return first;
}

/**
 * @desc   反转链表
 * @param  {ListNode} head 链表第一个节点
 * @return {ListNode}
 */
function reverseLinkedList2(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let result = reverseLinkedList2(head.next);

    head.next.next = head;
    head.next = null;
    return result;
}

function test (arr, index) {
    console.log("\n----------------------------");
    console.log(`第 ${index} 个测试用例开始\n`);
    let head = generateListNodeFromArray(arr);
    head.show();

    let reversedHead = reverseLinkedList2(head);
    reversedHead.show();
    console.log(`\n第 ${index} 个测试用例结束`);
    console.log("----------------------------\n");
}

let cases = [
  [3],
  [3,2],
  [3,2,1],
  [3,2,1,0],
  [3,8,1,0]
].forEach(test);
