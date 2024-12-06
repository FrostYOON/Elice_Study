// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// a, b, c, d는 1 이상 6 이하의 정수입니다.

function solution(a, b, c, d) {
  var answer = 0;
  let values = [a, b, c, d].sort((x, y) => x - y);

  if (values[0] === values[3]) {
    answer = 1111 * values[0];
  }else if (values[0] === values[2] || values[1] === values[3]) {
    p = values[1];
    q = values[0] === values[2] ? values[3] : values[0];
    answer = Math.pow(10 * p + q, 2);
  }else if (values[0] === values[1] && values[2] === values[3]) {
    p = values[0];
    q = values[2];
    answer = (p + q) * Math.abs(p - q);
  }else if (values[0] === values[1] || values[1] === values[2] || values[2] === values[3]) {
    p = values[1];
    q = values[0] === values[1] ? values[2] : values[0];
    r = values[3];
    answer = (q * r);
  }else {
    answer = values[0];
  }
  return answer;
}

