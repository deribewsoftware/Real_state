userRouter.get('/test',(req,res) => {
  res.send("user test success");
    console.log("user route test");
  });
  
  export default userRouter;