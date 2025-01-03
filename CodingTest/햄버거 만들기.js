function solution(ingredient) {
  var answer = 0;
  let tempArr = [];
  
  for(let i = 0; i < ingredient.length; i++) {
      tempArr.push(ingredient[i])
      if(tempArr.length >= 4) {
          let temp = tempArr.slice(-4).join('')
          if (temp === '1231') {
              tempArr.splice(-4)
              answer++;
          }
      }
  }
  
  let temp = ingredient.join('')
  
  return answer;
}