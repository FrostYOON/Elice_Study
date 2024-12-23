function solution(a, b, n) {
  var answer = 0;
  
  while(true) {
      answer += Math.floor(n / a) * b;
      n = Math.floor(n / a) * b + Math.floor(n % a);
      if (a > n) {
          return answer;
      }
  }
}