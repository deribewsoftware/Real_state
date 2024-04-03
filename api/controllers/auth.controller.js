import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register=async(req,res)=>{
 const  {username,email,password} = req.body

try{
  const hashedPassword=await bcrypt.hash(password,10)
  const newUser=await prisma.user.create({
   data:{
     username:username,
     password:hashedPassword,
    email:email
   }
  })
 
   res.status(201).json({message:"user registration success", success:true,user:newUser})
}
catch(err){
 
  res.status(500).json({message:"user registration error",success:false})
}
}



export const login=async(req,res)=>{

  const {password,username} = req.body;

  try{
    // CHECK USER EXISTS
    const user=await prisma.user.findUnique({where: {username:username}})

    if(!user){
return res.status(401).json({message:"invalid credentials"});
    }

    // COMPARE PASSWORD
    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
      return res.status(401).json({message:"invalid credentials"});
    }



    // SAVE USER COOKIES AND SEND TO USER
    // res.setHeader("Set-Cookie","test"+"myValue").json("success")
    res.cookie("test","myValue",{httpOnly:true,secure:true})
  }
  catch(err){
    res.status(500).json({message:"user login error",success:false})
  }
  
}




export const logout=(req,res)=>{
 
  res.send("user logout success")
}


