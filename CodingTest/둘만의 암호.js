function solution(s, skip, index) {
  var answer = '';
//     const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     const arr = s.split('');
  
//     const alpha_skip = alpha.filter(item => !skip.includes(item));
  
//     for (let i = 0; i < s.length; i++) {
//         let curIdx = alpha_skip.indexOf(s[i]);
//         let idx = (curIdx + index) % alpha_skip.length;
//         answer += alpha_skip[idx];
//         console.log(answer)
//     }
  
  let skipSet = new Set(skip.split('').map(item => item.charCodeAt(0)))
  return s.split('').map(item => {
      let current = item.charCodeAt(0);
      for (let i = 0; i < index;) {
          current += 1;
          
          if (current > 122) {
              current = 97;
          }
          
          if (!skipSet.has(current)) {
              i++;
          }
      }
      return String.fromCharCode(current)
  }).join('')
  
  return answer;
}