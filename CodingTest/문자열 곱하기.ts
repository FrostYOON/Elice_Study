function multiply(num1: string, num2: string): string {
  const arr = new Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const mul = +num1[i] * +num2[j];
      const sum = arr[i + j + 1] + mul;
      arr[i + j + 1] = sum % 10;
      arr[i + j] += Math.floor(sum / 10);
    }
  }

  while(arr[0] === 0) {
    arr.shift();
  }

  return arr.length ? arr.join('') : "0";
};