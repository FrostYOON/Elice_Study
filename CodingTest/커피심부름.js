function solution(order) {
  var answer = 0;
  
  order.forEach(item => {
      if(item.includes("americano") || item === "anything") {
          answer += 4500;
      }else if(item.includes("cafelatte")){
          answer += 5000;
      }
  })
  return answer;
}