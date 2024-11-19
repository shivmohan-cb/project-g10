const User = require("../models/user.model");
const { CreateError } = require("../utils/errorHandler");


const renderRegister = (req,res)=>{
    let user = req.user;
  if(!req.user){
  res.render("register",{user});
  }else {
   res.redirect("/home");
  }
}

const registerUser = async (req,res,next)=>{
    let user = req.user;
if(user){
    res.redirect('/home');
}else {
    // register user
let {name,username,email,password} = req.body;
    let user = new User({name,username,email,password});
    await user.save();
    res.send("user Created Sucessfully");
}
}

const updateUser = async (req,res) =>{
// update user information
}

const deleteUser = async (req,res,next)=>{
// delete user
let {username,email} = req.body;
if(username){
 try {
    await User.deleteOne({username});
    res.send("User removed");
 }catch(err){
  next(CreateError(err));
 }
}
else {
    try {
        await User.deleteOne({email});
        res.send("User removed");
     }catch(err){
      next(CreateError(err));
     }
}
}

module.exports = {
    registerUser,updateUser,deleteUser,renderRegister
}