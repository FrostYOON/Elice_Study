function solution(d, budget) {
  var answer = 0;
  let pay = 0;
  
  d.sort((a, b) => a - b).forEach(item => {
      if (pay + item <= budget) {
          pay += item;
          answer++;
      }
  })
  return answer;
}