/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let word_set = new Set(wordList)
  if (!word_set.has(endWord)) return 0
  word_set.delete(beginWord)
  
  // 双向bfs 时O(N*C^2) 空O(N*C^2)
  function doule_bfs() {
      let visited = new Set()
      let begin_visited = new Set()
      let end_visited = new Set()
      visited.add(beginWord)
      begin_visited.add(beginWord)
      end_visited.add(endWord)
      let step = 1

      while (begin_visited.size && end_visited.size) {
          console.log(begin_visited,end_visited)
          if (begin_visited.size > end_visited.size) {
              [begin_visited, end_visited] = [end_visited, begin_visited]
          }

          let next_visited = new Set()

          for (let current_word of begin_visited.values()) {
              if (changeWordEveryOneLetter(current_word, end_visited, next_visited, visited, word_set)) {
                  return step + 1
              }
          }
          begin_visited = next_visited
          step++
      }

      return 0
  }


  return doule_bfs()
};

function changeWordEveryOneLetter(current_word, end_word, queue, visited, word_set) {
  let len = current_word.length
  current_word = current_word.split('')
  for (let i = 0; i < len; i++) {
      let tmp = current_word[i]
      for (let j = 97; j < 123; j++) {
          let k = String.fromCharCode(j)
          if (k === tmp) continue
          current_word[i] = k
          let next_word = current_word.join('')
          if (word_set.has(next_word)) {
              // if (next_word === end_word) return true //单向
              if (end_word.has(next_word)) return true
              if (!visited.has(next_word)) {
                  // queue.push(next_word) //单向
                  queue.add(next_word) //双向
                  visited.add(next_word)
              }
          }
      }
      current_word[i] = tmp
  }
  return false
}