import express from "express";


const app = express();

//api
app.use("/api/hello",(req,res)=>{
  res.send("api works successfully")


})
app.listen(5000,() => {
  console.log('server running');
});