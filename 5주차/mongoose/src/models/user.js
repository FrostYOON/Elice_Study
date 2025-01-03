import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 50,
    }, // 사용자 이름
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.*\@.*\..*/, "Please enter a valid email address"],
    }, // 이메일
    password: { type: String, required: true, minlength: 8 }, // 비밀번호
    birthdate: { type: Date }, // 생년월일
    role: { type: String, enum: ["user", "admin"], default: "user" }, // 권한
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }], // 게시글 참조
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // 댓글 참조
  },
  { timestamps: true } // 생성 날짜와 업데이트 날짜 자동 생성
);

const User = mongoose.model("User", userSchema);

export default User;
