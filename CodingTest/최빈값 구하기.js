function solution(array) {
  var answer = 0;
  
//     let count = 0;
//     let arr = {}
  
//     array.forEach(item => {
//         arr[item] = (arr[item] || 0) + 1;
//     })
  
//     for (let a in arr) {
//         if (arr[a] > count) {
//             count = arr[a];
//             answer = Number(a);
//         }else if (arr[a] === count) {
//             answer = -1;
//         }
//     }
  
  let data = array.reduce((pre, cur) => {
      pre[cur] = (pre[cur] || 0) + 1;
      return pre;
  }, {})
  
  //2차원 배열로 변경
  let tempArr = Object.entries(data).sort((a, b) => b[1] - a[1])
  if (tempArr.length > 1 && (tempArr[0][1] === tempArr[1][1])) {
      return -1;
  }
  answer = tempArr[0][0]
  return answer;
}