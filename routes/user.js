const { registerUser, updateUser, deleteUser, renderRegister } = require("../controllers/user.controller");
const verfiyToken = require("../utils/verifyToken");

const user = require("express").Router();
user.get("/register",renderRegister); // render register ejs page on get request
user.post("/register",registerUser);// route for user registeration
user.put("/update", verfiyToken,updateUser);// route for updating user info
user.delete("/delete",verfiyToken,deleteUser); //route for deleting user

module.exports = user;