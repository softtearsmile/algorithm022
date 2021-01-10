/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    // 时O(n∗n!) 空O(n)
    const res = [];
    const used = {};

    function recursion(path) {
        if (path.length == nums.length) {
            res.push(path.slice());
            return;
        }
        for (const num of nums) {
            if (used[num]) continue;
            path.push(num);
            used[num] = true;
            recursion(path);
            path.pop();
            used[num] = false;
        }
    }

    recursion([]);
    return res;
};