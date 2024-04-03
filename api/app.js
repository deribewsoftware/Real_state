import express from "express";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());
//api
app.use("/api/post",postRouter)
app.use("/api/auth",authRouter)


app.listen(5000,() => {
  console.log('server running');
});