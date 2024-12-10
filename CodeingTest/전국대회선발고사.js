function solution(rank, attendance) {
  var answer = 0;
  const pass = [];
  
  rank.forEach((item, idx) => {
      if(attendance[idx]) {
          pass.push({ item, idx })
      }
  });
  
  pass.sort((a, b) => a.item - b.item);
  
  answer = pass[0].idx * 10000 + pass[1].idx * 100 + pass[2].idx;
  
  return answer;
}