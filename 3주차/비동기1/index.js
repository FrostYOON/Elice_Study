// console.log(1);

// // 비동기 함수
// setTimeout(() => {
//   console.log(2);
// }, 1000);

// // 반복 함수
// setInterval(() => {
//   console.log(3);
// }, 1000, '반복');

// console.log(3);

// let count = 0;

// let id = setInterval(() => {
//   count++;
//   if(count === 5) {
//     clearInterval(id);
//   }
//   console.log(count);
// }, 1000, '반복');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('성공');
//     // reject('실패');
//   }, 1000);
// });

// const promise = Promise.resolve('성공');
// const promise = Promise.reject('실패');

// 성공 시 실행
// promise.then((result) => {
//   console.log(result);
// });

// 실패 시 실행
// promise.catch((error) => {
//   console.log(error);
// });

// 무조건 실행
// promise.finally(() => {
//   console.log('finally');
// });

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// const promise = new Promise((resolve, reject) => {
//   resolve(3);
// }).then((result) => {
//   console.log(result);
// });

// console.log(4);

// console.log([[1,2,3], [4,5,6], [7,8,9]]);

// a[1][1];
