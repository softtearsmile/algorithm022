/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  // 时O(n) 空O(m+n)
  let obj = Object.create(null), arr = []

  for (let i of arr1) {
      obj[i] ? obj[i]++ : obj[i] = 1
  }

  for (let i of arr2) {
      arr.push(...new Array(obj[i]).fill(i))
      delete obj[i]
  }

  for (let i of Object.keys(obj)) {
      arr.push(...new Array(obj[i]).fill(i))
  }


  return arr
};