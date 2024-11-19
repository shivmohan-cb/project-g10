const JWT  = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const { CreateError } = require("../utils/errorHandler");

const renderLogin = (req,res)=>{
     let user = req.user
    if(req.user){
        res.redirect("/home");
     }
  else {
    res.render('login',{user});
  }
}

const login = async (req,res,next)=>{
 let {email,password} = req.body;
 if(req.user){
    res.redirect("/home");
 }
 else {
 try {
 let user =  await User.findOne({email});
 let hashedPass = user.password;

 const match = await bcrypt.compare(password,hashedPass);
 if(match){// create session or verify jwt
   let {name,email,username,profilePic} = user ;
    let token = JWT.sign({name,email,username,profilePic},"Secret");
    console.log(token);
    res.cookie("token",token);
    res.send("cookie generated");
 }else {
    next(CreateError(401,"UnAuthorized"));
 }
}catch(err){
//  next(err);
 console.log(err);
}
 }
}

const logout = (req,res)=>{
// destroy session or delete user from req object
}

module.exports = {
    login,logout,renderLogin
}