function solution(my_string, queries) {
  var answer = '';
  
  for (let i = 0; i < queries.length; i++) {
      const str1 = my_string.slice(0, queries[i][0]);
      const str2 = my_string.slice(queries[i][0], queries[i][1] + 1);
      const str3 = my_string.slice(queries[i][1] + 1);
      const str = str2.split('').reverse().join('');
      
      my_string = str1 + str + str3;
  }
  answer = my_string;
  return answer;
}