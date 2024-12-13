function solution(arr, k) {
  var answer = [];
  
//     for (let num of arr) {
//         if(answer.length === k) {
//             break;
//         }
      
//         if(!answer.includes(num)) {
//             answer.push(num);
//         }
//     }
  
//     while (answer.length < k) {
//         answer.push(-1);
//     }
  
  arr = Array.from(new Set(arr));
  
  if (arr.length < k) {
      for (let i = arr.length; i < k; i++) {
          arr.push(-1);
      }
  } else {
      // arr = arr.slice(0, k);
      arr.length = k
  }
  
  answer = arr;
  
  return answer;
}