import { User } from "../models/index.js";
import jwt from "jsonwebtoken";

export async function signUpController(req, res) {
  try {
    const { username, email, password, passwordConfirm, birth } = req.body;
    const user = await User.create({ username, email, password, birth });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "서버 오류" });
  }
}

export async function loginController(req, res) {
  let token = null;
  if (req.user) {
    const _id = req.user._id;
    const payload = { _id };
    token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
  }
  res.cookie("token", token);
  res.status(200).json({ message: "로그인 성공", token });
}

