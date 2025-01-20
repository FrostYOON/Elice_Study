function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  let strLen: number = 0;
  let arr: string[] = [];

  for (const str of s) {
    if (arr.includes(str)) {
      arr = arr.slice(arr.indexOf(str) + 1);
    }
    arr.push(str);
    strLen = Math.max(strLen, arr.length);
  }
  return strLen;

  // let max: number = 0;
  // let start: number = 0;
  // let temp: Record<string, number> = {};

  // for (let i = 0; i < s.length; i++) {
  //   if(temp[s[i]] !== undefined && temp[s[i]] >= start) {
  //     start = temp[s[i]] + 1;
  //   }
  //   temp[s[i]] = i;
  //   max = Math.max(max, i - start + 1)
  // }
  // return max
};