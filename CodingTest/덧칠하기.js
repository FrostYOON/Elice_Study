function solution(n, m, section) {
  var answer = 0;
//     let count = 0;
  
//     for (let sec of section) {
//         if (sec > count) {
//             answer++;
//             count = sec + m - 1;
//         }
//     }
  
  let arr = new Array(n).fill(true);
  
  section.forEach(item => arr[item - 1] = false)
  
  for (let i = 0; i < n; i++) {
      if (!arr[i]) {
          i += m - 1
          answer++;
      }
  }
  
  return answer;
}