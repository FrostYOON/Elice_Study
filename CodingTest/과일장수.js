function solution(k, m, score) {
  var answer = 0;
  
  let arr = []
  score.sort((a, b) => b - a)
  
  for (let i = 0; i < score.length; i += m) {
      if (i + m > score.length) {
          break;
      }
      arr.push(score.slice(i, i + m))
  }
  
  return arr.reduce((pre, cur) => {
      pre += cur[m - 1] * m
      return pre
  }, 0)
}