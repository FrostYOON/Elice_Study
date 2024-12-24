import express from 'express';

// 라우터 생성
const userRouter = express.Router();

// 유저 아이디 검증
function isNumber(req, res, next) {
  try {
    if (isNaN(req.params.id) || req.params.id === null) {
      throw new Error("Id is not a number");
    } else {
      next();
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// 유저 프로필 조회
userRouter.get('/profile', (req, res) => {
  console.log(req.query.name, req.query.age);
  res.send('user profile');
});

// 유저 아이디 조회
userRouter.get('/:id', isNumber, (req, res) => {
  res.send(`user id: ${req.params.id}`);
});

// 유저 생성
userRouter.post('/profile', (req, res) => {
  console.log(req.get('Content-Type'));
  console.log(req.body);
  // res.send('create user');
  // res.json({ name: 'ysyoon', age: 20 });
  res.status(201).send('create user');
});

export default userRouter;
