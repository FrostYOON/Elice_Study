function solution(keymap, targets) {
  var answer = [];
  
//     const keys = keymap.reduce((pre, cur) => {
//         console.log(cur)
//         cur.split('').forEach((item, idx) => {
//             if (!pre[item] || pre[item] > idx + 1) {
//                 pre[item] = idx + 1;
//             }
//         })
//         return pre;
//     }, {})
  
//     console.log(keys)
  
//     targets.forEach(item => {
//         let count = 0;
      
//         for (const str of item) {
//             if (!keys[str]) {
//                 count = -1;
//                 break;
//             }
//             count+= keys[str];
//         }
//         console.log(count)
//         answer.push(count)
//     })
  
  targets.forEach(target => {
      let cnt = 0;
      for (let i = 0; i < target.length; i++) {
          let min = Infinity;
          keymap.forEach(item => {
              const idx = item.indexOf(target[i])
              if (idx !== -1) {
                  min = Math.min(min, idx + 1);
              }
          })
          if (min === Infinity) {
              cnt = -1;
              break;
          }
          cnt += min
      }
      answer.push(cnt);
  })
  
  return answer;
}