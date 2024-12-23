function solution(s) {
  //     var answer = [];
      
  //     let str = '';
      
  //     let str2 = {};
      
  //     for (let i = 0; i < s.length; i++) {
  //         str = s[i];
          
  //         if (str2[str] !== undefined) {
  //             answer.push(i - str2[str])
  //         }else {
  //             answer.push(-1);
  //         }
          
  //         str2[str] = i
  //     }
      
  //     return answer;
      
      var answer = [];
      
      let arr = [];
      
      [...s].forEach((item, index) => {
          if(!arr.includes(item)) {
              answer.push(-1);
          }else if (arr.includes(item)) {
              answer.push(index - arr.lastIndexOf(item))
          }
          
          arr.push(item)
      })
      
      return answer;
  }