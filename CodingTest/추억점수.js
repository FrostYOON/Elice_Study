function solution(name, yearning, photo) {
  var answer = [];
  
  // for (let i = 0; i < photo.length; i++) {
  //     let sum = 0;
  //     for (let j = 0; j < name.length; j++) {
  //         if (photo[i].includes(name[j])) {
  //             sum = sum + yearning[j]
  //         }
  //     }
  //     answer.push(sum)
  // }
  
  for (persons of photo) {
      let score = 0;
      for (person of persons) {
          const index = name.indexOf(person);
          if (index !== -1) {
              score += yearning[index]
          }
      }
      answer.push(score);
  }
  
  return answer;
}