/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    // 时O(n∗n!) 空O(n)
  const res = [];
  const len = nums.length;
  const used = new Array(len);
  nums.sort((a, b) => a - b);

  function recursion(path) {
      if (path.length == len) {
          res.push(path.slice());
          return;
      }

      for (let i = 0; i < len; i++) {
          if (nums[i - 1] == nums[i] && i - 1 >= 0 && !used[i - 1]) {
              continue;
          }
          if (used[i]) {
              continue;
          }
          path.push(nums[i]);
          used[i] = true;
          recursion(path);
          path.pop();
          used[i] = false;
      }
  };

  recursion([]);
  return res;
};