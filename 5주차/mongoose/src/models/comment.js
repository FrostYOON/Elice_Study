import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    content: { type: String, required: true, trim: true, maxlength: 500 }, // 댓글 내용
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    }, // 게시글 참조
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // 작성자 참조
    likes: { type: Number, default: 0 }, // 좋아요 수
  },
  { timestamps: true } // 생성 날짜와 업데이트 날짜 자동 생성
);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
