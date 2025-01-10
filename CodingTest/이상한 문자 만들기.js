function solution(s) {
  var answer = '';
  let arr = [];
  
  let str = s.split(' ');
  
  for (let i = 0; i < str.length; i++) {
      let result = str[i].split('').map((item, index) => {
          if (index % 2 === 0) {
              return item.toUpperCase();
          } else {
              return item.toLowerCase();
          }
      }).join('')
      arr.push(result);
  }
  
 answer = arr.join(' ')
  
  return answer;
}