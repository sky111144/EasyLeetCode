function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * @desc   反转二叉树：先序遍历
 * @param  {TreeNode} root
 * @return {TreeNode}
 */
function invertTree1 (root) {
    if (root === null) return new TreeNode(root)

    [root.left, root.right] = [root.right, root.left];
    invertTree1(root.left);
    invertTree1(root.right);

    return root;
};

/**
 * @desc   反转二叉树：中序遍历
 * @param  {TreeNode} root
 * @return {TreeNode}
 */
function invertTree2 (root) {
    if (root === null) return new TreeNode(root)

    invertTree2(root.left);
    [root.left, root.right] = [root.right, root.left];
    invertTree2(root.left);

    return root;
};

/**
 * @desc   反转二叉树：后序遍历
 * @param  {TreeNode} root
 * @return {TreeNode}
 */
function invertTree3 (root) {
    if (root === null) return new TreeNode(root)

    invertTree3(root.left);
    invertTree3(root.right);
    [root.left, root.right] = [root.right, root.left];

    return root;
};

/**
 * @desc   反转二叉树：层序遍历
 * @param  {TreeNode} root
 * @return {TreeNode}
 */
function invertTree4 (root) {
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

let root = new TreeNode(1);
root.right = new TreeNode(2);

console.log(invertTree4(root));
