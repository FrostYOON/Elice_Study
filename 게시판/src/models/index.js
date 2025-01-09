import mongoose from "mongoose";
import PostSchema from "./schemas/posts.js";
import UserSchema from "./schemas/users.js";
import CommentSchema from "./schemas/comments.js";

export const Post = mongoose.model('Post', PostSchema);
export const User = mongoose.model('User', UserSchema);
export const Comment = mongoose.model('Comment', CommentSchema);