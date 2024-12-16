function solution(dots) {
  var answer = 0;
//     let x = dots.map(item => item[0]);
//     let y = dots.map(item => item[1]);
  
//     x = Math.max(...x) - Math.min(...x);
//     y = Math.max(...y) - Math.min(...y);
  
//     answer = x * y;
  
//     return answer;
  let difX = 0;
  let difY = 0;
  
  const initX = dots[0][0]
  const initY = dots[0][1]
  
  for (let i = 1; i < dots.length; i++) {
      if (dots[i][0] !== initX) {
          difX = Math.abs(dots[i][0] - initX);
      }
      if (dots[i][1] !== initY) {
          difY = Math.abs(dots[i][1] - initY);
      }
  }
  return difX * difY
}