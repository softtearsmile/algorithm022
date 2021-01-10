/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  // 时O(n) 空O(1)
  let result = 0
  // 0上 1右 2下 3左
  let x = y = direction = 0
  let xy = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let set = new Set()
  // 用 set 存储障碍物的坐标
  for (let obstacle of obstacles) {
      set.add(`${obstacle[0]},${obstacle[1]}`)
  }

  for (let ac of commands) {
      if (ac === -2) {
          // left
          direction = direction === 0 ? 3 : direction - 1
      } else if (ac === -1) {
          // right
          direction = direction === 3 ? 0 : direction + 1
      } else {
          // move
          while (ac > 0 && !set.has(`${x + xy[direction][0]},${y + xy[direction][1]}`)) {
              ac--
              x += xy[direction][0]
              y += xy[direction][1]
          }

          // 最远距离不是终点距离
          result = Math.max(result, x * x + y * y)
      }
  }
  return result;
};