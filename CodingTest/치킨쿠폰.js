function solution(chicken) {
  var answer = 0;
  let coupon = chicken;
  while (coupon >= 10) {
      const newChicken = Math.floor(coupon / 10);
      answer += newChicken;
      coupon = newChicken + (coupon % 10)
  }
  
  return answer;
}