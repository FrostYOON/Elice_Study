function solution(s) {
  var answer = 0;
  let count = 0;
  let count2 = 0;
  let str = '';
  
  for (let i = 0; i < s.length; i++) {
      if (count === 0) {
          str = s[i];
          count = 1;
          count2 = 0;
      }else if (str === s[i]) {
          count++;
      }else {
          count2++;
      }
      
      if (count === count2) {
          answer++;
          count = 0;
          count2 = 0;
      }
  }
  
  if (count2 > 0) {
      answer++;
  }else if (count > 0) {
      answer++;
  }else {
      answer;
  }
  return answer;
}