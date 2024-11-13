const user = require("express").Router();

user.post("/register",registerUser);// route for user registeration
user.put("/update",updateUser);// route for updating user info
user.delete("/delete",deleteUser); //route for deleting user


module.exports = user;