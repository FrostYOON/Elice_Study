// express 서버 코드
// import app from './app.js';

// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// express 모듈 사용 서버 생성
// 라우터 사용
import express from 'express';

// 라우터 가져오기
import userRouter from './users.js'; // 유저 라우터
import postRouter from './post.js'; // 게시글 라우터
import logger from 'morgan';

const app = express();

// 미들웨어 함수 정의
function addProperty(req, res, next) {
  req.NewProperty = 'new';
  res.NewProperty = 'new2';
  next();
}

// 미들웨어 사용
app.use(logger('dev'));
app.use(express.json()); // 요청 바디 파싱
app.use(express.urlencoded({ extended: true })); // Form 요청 바디 파싱
app.use('/users', userRouter); // 유저 라우터 사용
app.use('/posts', addProperty, postRouter); // 게시글 라우터 사용
app.use(express.static('public')); // 정적 파일 서빙


// 서버 실행
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});