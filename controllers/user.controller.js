const User = require("../models/user.model");
const { CreateError } = require("../utils/errorHandler");

const registerUser = async (req,res,next)=>{
// register user
let {name,username,email,password} = req.body;
  try {
    await User.create({name,username,email,password});
    res.send("user Created Sucessfully");
  }catch(err){
    next(CreateError(err));
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
    registerUser,updateUser,deleteUser
}