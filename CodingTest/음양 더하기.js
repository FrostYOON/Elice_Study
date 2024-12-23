function solution(absolutes, signs) {
  //     var answer = 0;
      
  //     for (let i = 0; i < absolutes.length; i++) {
  //         if (signs[i] === true) {
  //             answer += absolutes[i]
  //         } else {
  //             answer -= absolutes[i]
  //         }
  //     }
  //     return answer;
      
      var answer = absolutes.reduce((pre, cur, idx) => {
          return pre += signs[idx] ? cur : - cur
      }, 0);
      
      
      
      return answer;
  }