function solution(keyinput, board) {
  var answer = [0, 0];
  
  const maxX = Math.floor(board[0] / 2);
  const maxY = Math.floor(board[1] / 2);
  
  for (const item of keyinput) {
      if (item === "up") {
          if (answer[1] + 1 <= maxY) {
              answer[1] += 1;
          }
      }else if (item === "down") {
          if (answer[1] - 1 >= -maxY) {
              answer[1] -= 1;
          }
      }else if (item === "left") {
          if (answer[0] - 1 >= -maxX) {
              answer[0] -= 1;
          }
      }else if (item === "right") {
          if (answer[0] + 1 <= maxX) {
              answer[0] += 1;
          }
      }
  }
  
  return answer;
}