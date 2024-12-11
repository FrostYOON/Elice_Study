function solution(arr) {
  const row = arr.length;
  const col = arr[0].length;
  
  if (row > col) {
      arr.forEach(item => {
          while(row !== item.length) {
              item.push(0);
          }
      })
  } else if (col > row) {
      const tempArr = new Array(col).fill(0);
      while(arr.length !== col) {
          arr.push(tempArr);
      }
  }
  
  return arr;
}

// function solution(arr) {
//   const row = arr.length;
//   const col = arr[0].length;
  
//   if (row > col) {
//       arr = arr.map(r => {
//           const count = row - col;
//           return r.concat(Array(count).fill(0));
//       })
//   } else if (col > row) {
//       const count2 = col - row;
//       for (let i = 0; i < count2; i++) {
//           arr.push(Array(col).fill(0));
//       }
//   }
  
  
//   return arr;
// }