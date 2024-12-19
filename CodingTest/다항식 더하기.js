function solution(polynomial) {
  var answer = '';
  
//     let arr = polynomial.split(' + ');
//     let num = 0;
//     let count = 0;
  
//     arr.forEach(item => {
//         if (item.includes('x')) {
//             let x = item.replace('x', '') || 1
//             count += Number(x);
//         }else {
//             num += Number(item)
//         }
//     })
  
//     let arr2 = [];
  
//     if (count > 0) {
//         if (count === 1) {
//             arr2.push('x')
//         }else {
//             arr2.push(`${count}x`)
//         }
//     }
//     if (num > 0) arr2.push(num);
  
//     answer = arr2.join(' + ')
  
  const x = polynomial.match(/\d*x/g) || []
  const digits = polynomial.split(' + ').filter(item => !item.includes('x'))
  const sumX = x.reduce((pre, cur) => {
      if(cur === 'x') return pre + 1;
      else return pre + Number(cur.slice(0, cur.length - 1))
  }, 0)
  
  const sumDigits = digits.reduce((pre, cur) => {
      return pre + Number(cur)
  }, 0)
  
  if (sumX === 0) return sumDigits.toString()
  
  if (!sumDigits) {
      return `${sumX === 1 ? '' : sumX}x`
  }else {
      return `${sumX === 1 ? '' : sumX}x + ${sumDigits}`
  }
  
  return answer;
}