import mongoose, { Schema } from "mongoose";

// 스키마 정의 (데이터 구조 정의, 데이터 유효성 검사, 데이터 기본값 설정)
const postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

// 모델 생성
const Post = mongoose.model("Post", postSchema);

export default Post;
