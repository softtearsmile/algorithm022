/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  let res = []

  let wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return res

  // 第 1 步：使用广度优先遍历得到后继结点列表 successors
  // key：字符串，value：广度优先遍历过程中 key 的后继结点列表
  let successors = new Map()
  // let found = bfs(beginWord, endWord, wordSet, successors)
  let found = dbbfs(beginWord, endWord, wordSet, successors)
  if (!found) return res

  // 第 2 步：基于后继结点列表 successors ，使用回溯算法得到所有最短路径列表
  let path = []
  path.push(beginWord)
  dfs(beginWord, endWord, successors, path, res)


  return res
};
// 双向
function dbbfs(beginWord, endWord, wordSet, successors) {

  let visited = new Set().add(beginWord).add(endWord)
  let beginVisited = new Set().add(beginWord)
  let endVisited = new Set().add(endWord)


  let forward = false
  let found = false
  let wordLen = beginWord.length

  while (beginVisited.size && endVisited.size) {

      if (beginVisited.size > endVisited.size) {
          [beginVisited, endVisited] = [endVisited, beginVisited]
          forward = !forward
      }

      let nextVisited = new Set()
      for (let currentWord of beginVisited.values()) {
          let word_arr = currentWord.split('')
          for (let j = 0; j < wordLen; j++) {
              let tmp = word_arr[j]
              for (let l = 97; l < 123; l++) {
                  let k = String.fromCharCode(l)
                  if (tmp === k) continue
                  word_arr[j] = k
                  let nextWord = word_arr.join('')

                  if (wordSet.has(nextWord)) {
                      if (endVisited.has(nextWord)) {
                          found = true
                          addToSuccessors(successors, forward, currentWord, nextWord)
                      }

                      if (!visited.has(nextWord)) {
                          nextVisited.add(nextWord)
                          addToSuccessors(successors, forward, currentWord, nextWord)
                      }
                  }
              }
              word_arr[j] = tmp
          }
      }
      beginVisited = nextVisited
      visited = new Set([...visited, ...nextVisited])

      if (found) break
  }


  return found
}
// 单向
function bfs(beginWord, endWord, wordSet, successors) {
  let queue = [beginWord]

  let visited = new Set().add(beginWord)
  let nextVisited = new Set()

  let found = false
  let wordLen = beginWord.length

  while (queue.length) {
      let len = queue.length
      for (let i = 0; i < len; i++) {
          let currentWord = queue.shift()
          let word_arr = currentWord.split('')
          for (let j = 0; j < wordLen; j++) {
              let tmp = word_arr[j]
              for (let l = 97; l < 123; l++) {
                  let k = String.fromCharCode(l)
                  if (tmp === k) continue
                  word_arr[j] = k
                  let nextWord = word_arr.join('')

                  if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                      if (nextWord === endWord) found = true

                      if (!nextVisited.has(nextWord)) {
                          queue.push(nextWord)
                          nextVisited.add(nextWord)
                      }

                      if (successors.has(currentWord)) {
                          successors.get(currentWord).add(nextWord)
                      } else {
                          successors.set(currentWord, new Set().add(nextWord))
                      }
                  }
              }
              word_arr[j] = tmp
          }

      }
      if (found) break

      visited = new Set([...visited, ...nextVisited])
      nextVisited.clear()
  }


  return found
}
// 深度
function dfs(beginWord, endWord, successors, path, res) {
  if (beginWord === endWord) {
      res.push(path.slice())
      return
  }

  if (!successors.has(beginWord)) return

  let successorWords = successors.get(beginWord)
  for (let nextWord of successorWords.values()) {
      path.push(nextWord)
      dfs(nextWord, endWord, successors, path, res)
      path.pop()
  }
}
// 添加到后继节点
function addToSuccessors(successors, forward, currentWord, nextWord) {
  if (forward) {
      [currentWord, nextWord] = [nextWord, currentWord]
  }
  if (successors.has(currentWord)) {
      successors.get(currentWord).add(nextWord)
  } else {
      successors.set(currentWord, new Set().add(nextWord))
  }
}