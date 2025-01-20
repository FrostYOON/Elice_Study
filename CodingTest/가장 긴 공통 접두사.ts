function longestCommonPrefix(strs: string[]): string {
  // if (strs.length === 0) {
  //   return ""
  // }
  // let fixedStr = strs[0];
  
  // for(const str of strs) {
  //   let i = 0;
  //   while(i < fixedStr.length && i < str.length && fixedStr[i] === str[i]) {
  //     i++;
  //   }
  //   fixedStr = fixedStr.substring(0, i);
  //   if (fixedStr === '') {
  //     return '';
  //   }
  // }
  // return fixedStr;

  let max = ""
  for (let i = 0; i < strs[0].length; i++) {
    if(strs.every(item => strs[0].slice(0, i + 1) === item.slice(0, i + 1))) {
      max = strs[0].slice(0, i + 1);
    } else {
      break;
    }
  }
  return max;
};