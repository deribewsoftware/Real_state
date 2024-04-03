import express from "express";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());
//api
app.use("/api/post",postRouter)
app.use("/api/auth",authRouter)


app.listen(5000,() => {
  console.log('server running');
});