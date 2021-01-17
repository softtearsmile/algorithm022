/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 时 O(n) 空O(1)
  let len = nums.length
  let max = 0
  let step = 0
  let end = 0
  for (let i = 0; i < (len - 1); i++) {
      max = Math.max(max, i + nums[i])
      if (end === i) {
          end = max
          step++
      }
  }

  return step
};