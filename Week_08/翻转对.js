/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  // 时 O(n) 空O(n)
  return merge_sort(nums, 0, nums.length - 1)
};

function merge_sort(nums, l, r) {
  if (l >= r) return 0
  let mid = l + ((r - l) >> 1),
      count = merge_sort(nums, l, mid) + merge_sort(nums, mid + 1, r),
      cache = new Array(r - l + 1);

  let t = l, c = 0
  for (let i = l, j = mid + 1; j <= r; j++ , c++) {
      while (i <= mid && nums[i] / 2 <= nums[j]) i++
      while (t <= mid && nums[t] <= nums[j]) cache[c++] = nums[t++]
      cache[c] = nums[j]
      count += mid - i + 1
  }

  while (t <= mid) cache[c++] = nums[t++]

  for (let i = l, j = 0; i <= r; i++ , j++) {
      nums[i] = cache[j]
  }

  return count
}