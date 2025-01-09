function solution(strings, n) {
  var answer = [];
  
  strings.sort((a, b) => {
      if (a.charAt(n) === b.charAt(n)) {
          if (a > b) return 1;
          return -1;
      }
      return a.charCodeAt(n) - b.charCodeAt(n)
  })
  
  return strings;
}