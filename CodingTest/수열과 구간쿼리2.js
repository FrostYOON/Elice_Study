function solution(arr, queries) {
  var answer = [];
  queries.forEach(query => {
      let tempArr = arr.slice(query[0], query[1] + 1).filter(item => {
          return item > query[2]
      })
      let res = Math.min(...tempArr)
      res = res > 1000000 ? -1 : res
      answer.push(res);
  })
  return answer;
}