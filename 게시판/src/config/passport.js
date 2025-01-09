import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy } from "passport-jwt";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../models/index.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const config = {
  usernameField: "email",
  passwordField: "password",
};

const jwtConfig = {
  jwtFromRequest: (req) => {
    let token = null;
    if (req && req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }
    return token;
  },
  secretOrKey: process.env.JWT_SECRET_KEY,
};

const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/api/v1/auth/login/google/callback",
};

passport.use(
  new LocalStrategy(config, async function (email, password, done) {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return done(null, false, {
          message: "등록되지 않은 유저이거나 비밀번호가 일치하지 않습니다.",
        });
      }

      const compareUser = bcrypt.compare(password, user.password);

      if (!compareUser) {
        return done(null, false, {
          message: "등록되지 않은 유저이거나 비밀번호가 일치하지 않습니다.",
        });
      }

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  })
);

passport.use(
  "jwt",
  new JwtStrategy(jwtConfig, async (user, done) => {
    try {
      const foundUser = await User.findById(user._id);
      if (!foundUser) {
        return done(null, false, { message: "등록되지 않은 유저입니다." });
      }
      return done(null, foundUser);
    } catch (error) {
      return done(error, null);
    }
  })
);

passport.use(
  new GoogleStrategy(googleConfig, async (accessToken, refreshToken, profile, done) => {
    try {
      const foundUser = await User.findOne({
        socialId: profile._json.sub,
        registerType: "google",
      });
      if (foundUser) {
        return done(null, foundUser);
      }
      const newUser = await User.create({
        email: profile._json.email,
        username: profile._json.name,
        password: null,
        registerType: "google",
        socialId: profile._json.sub,
      });
      return done(null, newUser);
    } catch (error) {
      return done(error, null);
    }
  })
);

export default passport;
