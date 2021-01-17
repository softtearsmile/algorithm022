/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 时 O(log(m * n)) 空O(1)
  let len = nums.length
  let left = 0,
    right = len - 1
  while (left < right) {
    let mid = (left + right) >> 1
    if (nums[mid] > nums[right]) {
      // [left,mid]
      left = mid + 1
    } else {
      // [mid,right]
      right = mid
    }
  }

  return nums[left]
};