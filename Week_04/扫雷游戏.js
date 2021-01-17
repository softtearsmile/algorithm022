/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  let r = board[0].length, //横
      c = board.length //纵
  let dirs = [[0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]

  let [x, y] = click
  if (board[x][y] === 'M' || board[x][y] === 'X') {
      board[x][y] = 'X'
  } else {
      dfs(x, y)
  }

  // 深度
  function dfs(x, y) {
      if (out_area(x, y) || board[x][y] !== 'E') return; // 不在界内或不是E，直接返回
      let count = 0;
      for (let [i, j] of dirs) {
          let nx = x + i
          let ny = y + j
          if (!out_area(nx, ny) && board[nx][ny] === 'M') count++
      }
      if (count == 0) { // 如果周围没有雷，标记B，递归周围的点
          board[x][y] = 'B';
          for (let [i, j] of dirs) {
              let nx = x + i
              let ny = y + j
              dfs(nx, ny);
          }
      } else {
          board[x][y] = count + '';
      }
  }

  // 判断区域
  function out_area(x, y) {
      return x < 0 || y < 0 || x >= c || y >= r
  }


  return board
};

