import express from "express";
import Post from "../models/post.js";
import User from "../models/user.js";
import CommentRouter from "./comment.route.js";

const router = express.Router({ mergeParams: true });

// post 생성
router.post("/", async (req, res) => {
  // Body로 전달된 제목, 내용, 작성자 정보 저장
  const { title, content, userId } = req.body;

  // 제목, 내용, 작성자 정보 중 하나라도 없으면 400 상태 코드 반환
  if (!title || !content || !userId) {
    return res.status(400).json({ message: "Invalid request" });
  }

  try {
    // 작성자 정보를 사용하여 사용자 찾기
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 게시글 생성
    const createPost = await Post.create({
      title,
      content,
      author: userId,
    });

    // 게시글 작성자 정보 채우기
    const populatedPost = await createPost.populate("author", "username");

    // 사용자의 게시글 목록에 추가
    user.posts.push(populatedPost._id);
    await user.save();

    // 생성된 게시글 반환
    res.status(201).json(populatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// post 조회
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({
      // title: { $in: title }, // title이 title 배열에 포함된 것만 조회
      // title: { $regex: `.*${title}.*`, $options: "i" }, // title이 title 문자열을 포함한 것만 조회 (정규표현식), i는 대소문자 구분 없이 조회
      // likes: { $exists: true }, // likes가 존재하는 것만 조회
      // likes: { $exists: false }, // likes가 존재하지 않는 것만 조회
      // likes: { $gte: likes }, // likes가 likes보다 크거나 같은 것만 조회
      // likes: { $lte: likes }, // likes가 likes보다 작거나 같은 것만 조회
      // createdAt: { $gte: createdAt }, // createdAt가 createdAt보다 크거나 같은 것만 조회
    }).populate("author", "username").populate("comments");
    // console.log(req.query);
    // console.log(findPosts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// post 상세 조회
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById({
      _id: req.params.id,
    })
      .populate("author", "username")
      .populate("comments");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// post 수정
router.put("/:id", async (req, res) => {
  // const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {
  //   returnDocument: "after",
  // });
  try {
    const updatePost = await Post.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// post 삭제
router.delete("/:id", async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    await User.updateOne(
      { posts: req.params.id },
      { $pull: { posts: req.params.id } }
    );
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.use("/:postId/comments", CommentRouter);

export default router;
