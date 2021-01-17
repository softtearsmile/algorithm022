/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    // 时O(n) 空O(n)

  function recuirsion(inorder) {
      if (!inorder || !inorder.length) return null
      let tmp = preorder.shift(), mid = inorder.indexOf(tmp)
      let root = new TreeNode(tmp)
      root.left = recuirsion(inorder.slice(0, mid))
      root.right = recuirsion(inorder.slice(mid + 1))
      return root
  }
  return recuirsion(inorder)
};