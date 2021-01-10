/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 时O(n) 空O(1)
  let k = 0, len = nums.length
  for (let i = 0; i < len; i++) {
      if (i > k) return false
      k = Math.max(k, i + nums[i])
      if (k >= len - 1) break;
  }
  return true
};