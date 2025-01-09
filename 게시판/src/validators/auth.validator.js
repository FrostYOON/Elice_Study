import validator from "validator";
import { User } from "../models/index.js";

export async function signUpValidator(req, res, next) {
  const { username, email, password, passwordConfirm, birth } = req.body;

  if (!username || !email || !password || !passwordConfirm || !birth) {
    return res.status(400).json({ message: "모든 필드를 입력해야 합니다." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "이메일 타입이 올바르지 않습니다." });
  }

  if (password !== passwordConfirm) {
    return res.status(400).json({ message: "비밀번호와 비밀번호 확인이 일치하지 않습니다." });
  }

  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ message: "이미 존재하는 유저입니다." });
  }

  next();
}