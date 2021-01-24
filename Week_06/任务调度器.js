/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // 时 O(n) 空 O(n)

  if (n === 0) return tasks.length
  let i = -1,
    maxCount = 0,
    h = new Uint16Array(26)
  while (++i < tasks.length) h[t = tasks[i].charCodeAt() - 65]++
  h.sort((a, b) => b - a)
  while (h[maxCount + 1] === h[maxCount++]) {}
  return Math.max((h[0] - 1) * (n + 1) + maxCount, i)
};