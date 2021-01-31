/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // 并查集 时O(n^2) 空O(n)
  const m = grid.length;
  const n = grid[0].length;
  const uf = new UnionFind();

  for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
          if(grid[i][j] == 1) uf.makeSet([i, j]);
      }
  }

  for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
          if (grid[i][j] == 1) {
              // console.log(i , j)
              if ((i + 1 < m) && (grid[i + 1][j] == 1)) uf.union([i, j], [i + 1, j]); // 右侧
              if ((j + 1 < n) && (grid[i][j + 1] == 1)) uf.union([i, j], [i, j + 1]); // 下侧
          }
      }
  }

  return uf.getCount();
};
class UnionFind {
  constructor() {
      this.parents = {};
      this.count = 0;
  }
  makeSet(x) {
      this.parents[x] = x + '';
      this.count++;
  }
  findSet(x) { // 路径压缩，查x的根节点
      while (this.parents[x] !== (x + '')) {
          x = this.parents[x];
      }
      return x + '';
  }
  union(x, y) {
      this.link(this.findSet(x), this.findSet(y));
  }
  link(x, y) {
      if (x === y) return;
      this.parents[x] = y;
      this.count--;
  }
  getCount() {
      return this.count;
  }
}/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // 并查集 时O(n^2) 空O(n)
  const m = grid.length;
  const n = grid[0].length;
  const uf = new UnionFind();

  for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
          if(grid[i][j] == 1) uf.makeSet([i, j]);
      }
  }

  for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
          if (grid[i][j] == 1) {
              // console.log(i , j)
              if ((i + 1 < m) && (grid[i + 1][j] == 1)) uf.union([i, j], [i + 1, j]); // 右侧
              if ((j + 1 < n) && (grid[i][j + 1] == 1)) uf.union([i, j], [i, j + 1]); // 下侧
          }
      }
  }

  return uf.getCount();
};
class UnionFind {
  constructor() {
      this.parents = {};
      this.count = 0;
  }
  makeSet(x) {
      this.parents[x] = x + '';
      this.count++;
  }
  findSet(x) { // 路径压缩，查x的根节点
      while (this.parents[x] !== (x + '')) {
          x = this.parents[x];
      }
      return x + '';
  }
  union(x, y) {
      this.link(this.findSet(x), this.findSet(y));
  }
  link(x, y) {
      if (x === y) return;
      this.parents[x] = y;
      this.count--;
  }
  getCount() {
      return this.count;
  }
}