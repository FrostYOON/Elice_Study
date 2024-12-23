function solution(n) {
  var answer = 0;
  
  while(true) {
      if (n % answer === 1) {
          return answer;
      }
      answer++
  }
  return answer;
}