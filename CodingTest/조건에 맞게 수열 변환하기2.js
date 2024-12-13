function solution(arr) {
  let count = 0;
  
  while(true) {
      const res = arr.map(item => {
          if (item >= 50 && item % 2 === 0) {
              return item / 2;
          } else if (item < 50 && item % 2 !== 0) {
              return item * 2 + 1;
          }
          return item;
      });
      
      if (JSON.stringify(arr) === JSON.stringify(res)) {
          break;
      }
      arr = res;
      
      count++;
  }
  return count;
}