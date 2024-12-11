// async function name(params) {

// }

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(url + ' fetch process');
//     }, 1000);
//   });
// }

// const func = async () => {
//   const data = await fetchData('https://naver.com');
//   console.log(data);
// }

// func();

// 예외 처리
const getUser = (userIndex) => {
  return new Promise((resolve, reject) => {
    const data = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    try {
      resolve(data[userIndex].name);
      // throw new Error('User not found');
    } catch (error) {
      reject(new Error(error + ' User not found'));
    } finally {
      console.log('finally');
    }
  });
}

getUser(2).then((result) => {
  console.log(result);
}).catch((reason) => {
  console.log(reason);
});