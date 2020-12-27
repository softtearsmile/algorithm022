  /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  /**
   * 桶排序
   * 时O(n) 空O(n)
   */
  if (nums.length <= k) return nums
  let map = new Map()
  for (let i of nums) {
      if (map.has(i)) {
          map.set(i, map.get(i) + 1)
      } else {
          map.set(i, 1)
      }
  }
  let bucket = []
  for (let [key, value] of map.entries()) {
      if (bucket[value]) {
          bucket[value].push(key)
      } else {
          bucket[value] = [key]
      }
  }
  let arr = []
  while (bucket.length) {
      let item = bucket.pop()
      if (item === undefined) continue
      arr.push(...item)
      if (arr.length === k) return arr
  }
};