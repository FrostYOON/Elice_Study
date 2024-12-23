function solution(food) {
  //     var answer = '';
      
  //     let player1 = [];
  //     let player2 = [];
  //     let count = 0;
      
  //     for (let i = 1; i < food.length; i++) {
  //         count = Math.floor(food[i] / 2);
  //         player1.push(i.toString().repeat(count));
  //         player2.unshift(i.toString().repeat(count));
  //     }
      
  //     answer = player1.join('') + '0' + player2.join('')
  //     return answer;
      
      var answer = '';
      
      for (let i = 1; i < food.length; i++) {
          answer += String(i).repeat(Math.floor(food[i] / 2));
      }
      
      return answer + "0" + [...answer].reverse().join('');
      // return answer + "0" + answer.split('').reverse().join('');
  }