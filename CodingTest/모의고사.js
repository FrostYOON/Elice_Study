function solution(answers) {
  var answer = [];
  
//     const people_1 = [1,2,3,4,5];
//     const people_2 = [2,1,2,3,2,4,2,5];
//     const people_3 = [3,3,1,1,2,2,4,4,5,5];
  
//     const score = [0,0,0];
  
//     answers.forEach((item, index) => {
//         if (item === people_1[index % people_1.length]) score[0]++;
//         if (item === people_2[index % people_2.length]) score[1]++;
//         if (item === people_3[index % people_3.length]) score[2]++;
//     })
  
//     const maxScore = Math.max(...score)
  
//     score.forEach((item, index) => {
//         if (item === maxScore) {
//             answer.push(index + 1)
//         }
//     })
  
  const people1 = [1,2,3,4,5];
  const people2 = [2,1,2,3,2,4,2,5];
  const people3 = [3,3,1,1,2,2,4,4,5,5];
  
  let temp = []
  
  const result = answers.reduce((pre, cur, idx) => {
      if (cur === people1[idx % people1.length]) pre[1] = (pre[1] || 0) + 1
      if (cur === people2[idx % people2.length]) pre[2] = (pre[2] || 0) + 1
      if (cur === people3[idx % people3.length]) pre[3] = (pre[3] || 0) + 1
      
      return pre
  }, {})
  
  temp = Object.entries(result)
  temp.sort((a, b) => {
      if (a[1] === b[1]) {
          return a[0] - b[0];
      }
      
      return b[1] - a[1];
  })
  
  answer.push(+temp[0][0])
  
  for (let i = 1; i < temp.length; i++) {
      if (temp[0][1] === temp[i][1]) {
          answer.push(+temp[i][0])
      }else {
          break;
      }
  }
  
  return answer;
}