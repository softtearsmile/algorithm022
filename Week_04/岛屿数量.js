/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 时O(n*m) 空O(1)

  if (!grid.length) return 0
  const row = grid.length,
    col = grid[0].length
  let res = 0

  function dps(grid, i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col) return
    if (grid[i][j] !== '1') return

    grid[i][j] = '0'

    for (let x of [-1, 0, 1]) {
      for (let y of [-1, 0, 1]) {
        if (x === y || x === -y) continue
        dps(grid, i + x, j + y)
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        res++
        dps(grid, i, j)
      }
    }
  }

  return res
};