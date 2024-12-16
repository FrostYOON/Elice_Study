function solution(spell, dic) {
  var answer = 0;
  // for (const item of dic) {
  //     if(spell.every(item2 => item.includes(item2))) {
  //         return answer = 1;
  //     }
  // }
  // return answer = 2;
  let sw = false
  dic.forEach(item => {
      spell.every(i => item.includes(i))? sw = true : {}
  })
  return sw ? 1 : 2;
}