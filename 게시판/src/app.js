import express from "express";
import apiV1Router from "./routes/api/v1/index.js";
import passport from "./config/passport.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());

// JWT 인증 미들웨어 (선택적)
app.use((req, res, next) => {
  if (!req.cookies["token"]) {
    return next();
  }
  passport.authenticate('jwt', { session: false })(req, res, next);
});

app.use('/api/v1', apiV1Router);

export default app;

