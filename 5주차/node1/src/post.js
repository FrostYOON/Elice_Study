import express from 'express';

const postRouter = express.Router();

let posts = [];
let postId = 1;

// 게시글 생성
postRouter.post('/', (req, res) => {
  const { title, content } = req.body;
  posts.push({ id: postId, title, content });
  res.status(201).json({ id: postId, title, content });
  postId++;
});

// 게시글 조회
postRouter.get('/', (req, res) => {
  res.json(posts);
});

// 게시글 상세 조회
postRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  const post = posts.find(post => post.id === parseInt(id));
  if (!post) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    res.status(200).json(post);
  }
});

// 게시글 수정
postRouter.put('/:id', (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  const post = posts.find(post => post.id === parseInt(id));
  if (!post) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    post.title = title;
    post.content = content;
    res.status(200).json(post);
  }
});

// 게시글 삭제
postRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  const postIdx = posts.findIndex(post => post.id === parseInt(id));
  if (postIdx === -1) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    posts.splice(postIdx, 1);
    // res.status(204).send();
    res.status(200).json({ message: 'Post deleted' });
  }
});

export default postRouter;
