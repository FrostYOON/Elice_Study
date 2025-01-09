import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("이메일 타입이 올바르지 않습니다.");
        }
      },
    },
    password: {
      type: String,
      minlength: 8,
    },
    registerType: {
      type: String,
      enum: ["normal", "google"],
      default: "normal",
    },
    socialId: {
      type: String,
    },
    birth: {
      type: Date,
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (next) {
  if (this.password && (this.isNew || this.isModified('password'))) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export default UserSchema;
