import express from "express"
const postRouter= express.Router();

postRouter.get('/test',(req,res) => {
res.send("post test success");
  console.log("post route test");
});

export default postRouter;