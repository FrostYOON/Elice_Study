// // 비동기 처리(Promise)
const response = fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  }
})
  .then((result) => result.json())
  // .then((data) => console.log(data))
  .then((data) => {
    document.body.innerHTML = `<li>${data.id}</li><li>${data.title}</li><li>${data.body}</li>`
  })
  .catch((error) => console.error(error));

// 비동기 처리 함수(async)
// async function fetchData(url) {
//   const data = await fetch(url);
//   // console.log(data.json());
//   return data.json();
// }

// fetchData('https://jsonplaceholder.typicode.com/posts/1');
