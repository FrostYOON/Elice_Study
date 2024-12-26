import express from "express";
import Post from "../models/post.js";

const router = express.Router();

// post 생성
router.post("/", async (req, res) => {
  // const createPost = await Post.create(req.body);
  // console.log(createPost);
  const createPost = new Post(req.body);
  await createPost.save();
  res.status(201).json(createPost);
});

// post 조회
router.get("/", async (req, res) => {
  const { title, content, likes, createdAt } = req.query;
  const findPosts = await Post.find({
    // title: { $in: title }, // title이 title 배열에 포함된 것만 조회
    title: { $regex: `.*${title}.*`, $options: "i" }, // title이 title 문자열을 포함한 것만 조회 (정규표현식), i는 대소문자 구분 없이 조회
    // likes: { $exists: true }, // likes가 존재하는 것만 조회
    // likes: { $exists: false }, // likes가 존재하지 않는 것만 조회
    // likes: { $gte: likes }, // likes가 likes보다 크거나 같은 것만 조회
    // likes: { $lte: likes }, // likes가 likes보다 작거나 같은 것만 조회
    // createdAt: { $gte: createdAt }, // createdAt가 createdAt보다 크거나 같은 것만 조회
  });
  // console.log(req.query);
  // console.log(findPosts);
  res.status(200).json(findPosts);
});

// post 상세 조회
router.get("/:id", async (req, res) => {
  // const findPost = await Post.findById(req.params.id);
  const findPost = await Post.findOne({
    _id: req.params.id,
  });
  // console.log(findPost);
  res.status(200).json(findPost);
});

// post 수정
router.put("/:id", async (req, res) => {
  // const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {
  //   returnDocument: "after",
  // });

  const updatePost = await Post.updateOne({ _id: req.params.id }, req.body);
  res.status(200).json(updatePost);
});

// post 삭제
router.delete("/:id", async (req, res) => {
  const deletePost = await Post.findByIdAndDelete(req.params.id);
  res.status(204).json(deletePost);
});

export default router;
