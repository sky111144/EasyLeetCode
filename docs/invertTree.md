### LeetCode：翻转二叉树

#### 题目描述

翻转一棵二叉树。

#### 数据结构

``` JavaScript
/**
 * @desc   二叉树节点
 * @param  {any} val
 * @return {TreeNode}
 */
 function TreeNode(val) {
     this.val = val;
     this.left = null;
     this.right = null;
 }
```

#### 一、递归法

##### （一）实现思路

1. 按照先序、中序、后序遍历二叉树，交换左右子节点。
2. 先序遍历：先访问根节点，再访问左子节点，最后访问右子节点（根 -> 左 -> 右）。
2. 中序遍历：先访问左子节点，再访问根节点，最后访问右子节点（左 -> 根 -> 右）。
2. 后序遍历：先访问左子节点，再访问右子节点，最后访问根节点（左 -> 右 -> 根）。

##### （二）实现代码

+ 先序遍历
``` JavaScript
/**
 * @desc   反转二叉树：先序遍历
 * @param  {TreeNode} root
 * @return {TreeNode}
 */
function invertTree (root) {
    if (root === null) return new TreeNode(root)

    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);

    return root;
};
```

+ 中序遍历

``` JavaScript
/**
 * @desc   反转二叉树：中序遍历
 * @param  {TreeNode} root
 * @return {TreeNode}
 */
function invertTree (root) {
    if (root === null) return new TreeNode(root)

    invertTree(root.left);
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);

    return root;
};
```

+ 后序遍历

``` JavaScript
/**
 * @desc   反转二叉树：后序遍历
 * @param  {TreeNode} root
 * @return {TreeNode}
 */
function invertTree (root) {
    if (root === null) return new TreeNode(root)

    invertTree(root.left);
    invertTree(root.right);
    [root.left, root.right] = [root.right, root.left];

    return root;
};

```


##### （三）复杂度分析
+ 时间复杂度：O(n)。树的 n 个节点，每个只被访问一次，时间复杂度是 O(n)。
+ 空间复杂度：使用递归需要额外栈空间保存不同递归层级中的执行环境，和二叉树的高度相关。树有 n 个节点，最多有 n 层，最坏空间复杂度 O(n)；最少 Math.floor(log2(n)) + 1 层，最好空间复杂度 O(logn)。


#### 二、迭代法

##### （一）实现思路

按照层序遍历二叉树，交换左右子节点。

##### （二）实现代码
``` JavaScript
/**
 * @desc   反转二叉树：层序遍历
 * @param  {TreeNode} root
 * @return {TreeNode}
 */
function invertTree (root) {
    if (root === null) return new TreeNode(root)

    let queue = [root];

    while (queue.length) {
        let current = queue.shift();

        [current.left, current.right] = [current.right, current.left];

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return root;
};
```

##### （三）复杂度分析
+ 时间复杂度：O(n)。树的 n 个节点，都要加入队列被访问一次，时间复杂度是 O(n)。
+ 空间复杂度：O(n)。树的 n 个节点，都被访问过一次。实际访问是通过，额外设置的队列，获取节点的。


> 本文采用 JavaScript 作为实现语言。
