export const register=(req,res)=>{
  console.log(req.body)
  res.send("user registration success")
}



export const login=(req,res)=>{
  res.send("user signin success")
}




export const logout=(req,res)=>{
 
  res.send("user logout success")
}


