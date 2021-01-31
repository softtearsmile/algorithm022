/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // 并查集 时O(m*n) 空间O(m*n)
  let m = board.length;
  if (m == 0) return;
  let n = board[0].length;
  let dummy = m * n;
  let uf = new unionFind(dummy);
  let arr = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (board[i][j] == 'O') {
              if (i == 0 || j == 0 || i == m - 1 || j == n - 1) {
                  uf.union(i * n + j, dummy)
              } else {
                  //考察四个方向
                  for (let k = 0; k < 4; k++) {
                      let x = i + arr[k][0];
                      let y = j + arr[k][1];
                      if (board[x][y] == 'O') uf.union(x * n + y, i * n + j);
                  }
              }
          }
      }
  }
  for (let i = 1; i < m - 1; i++) {
      for (let j = 1; j < n - 1; j++) {
          if (!uf.isConnected(i * n + j, dummy)) board[i][j] = 'X';
      }
  }
};

class unionFind {
  constructor(n) {
      this.count = n;
      this.parent = new Array(n);
      for (let i = 0; i < n; i++) {
          this.parent[i] = i;
      }
  }

  find(p) {
      let root = p;
      while (this.parent[root] !== root) {
          root = this.parent[root];
      }
      // 压缩路径
      while (this.parent[p] !== p) {
          let x = p;
          p = this.parent[p];
          this.parent[x] = root;
      }
      return root;
  }

  union(p, q) {
      let rootP = this.find(p);
      let rootQ = this.find(q);
      if (rootP === rootQ) return;
      this.parent[rootP] = rootQ;
      this.count--;
  }
  isConnected(x, y) {
      return this.find(x) === this.find(y)
  }
}