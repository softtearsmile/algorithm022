/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // 时O(n) 空O(1)
  let b5 = 0
  let b10 = 0

  for (let i of bills) {
      if (i === 5) {
          b5++
      } else if (i === 10 && b5 > 0) {
          b5--
          b10++
      } else if (b10 > 0 && b5 > 0) {
          b5--
          b10--
      } else if (b5 > 2) {
          b5 -= 3
      } else {
          return false
      }
  }

  return true
};