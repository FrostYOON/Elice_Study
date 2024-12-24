// express 모듈 사용 서버 생성
// import express from 'express';

// const app = express();

// app.get('/test', (req, res) => {
//   res.send('Hello World!!!');
// });

// export default app;


// http 모듈 사용 서버 생성
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// import { isEvenNumber, isOddNumber } from './module.js';

// console.log(isEvenNumber(10));
// console.log(isOddNumber(10));