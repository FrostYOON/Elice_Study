function solution(n) {
  var answer = Array.from({length: n}, () => Array(n).fill(0));
  let num = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  
  while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
          answer[top][i] = num++;
      }
      top++;
      
      for (let j = top; j <= bottom; j++) {
          answer[j][right] = num++;
      }
      right--;
      
      for (let k = right; k >= left; k--) {
          answer[bottom][k] = num++;
      }
      bottom--;
      
      for (let l = bottom; l >= top; l--) {
          answer[l][left] = num++
      }
      left++;
      
      if (num > n * n) {
          break;
      }
  }

  return answer;
}