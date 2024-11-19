const { login, logout, renderLogin } = require("../controllers/auth.controller");
const verfiyToken = require("../utils/verifyToken");

const auth  = require("express").Router();

auth.get("/login",renderLogin); // render login ejs page on get request 
auth.post("/login",login);// route for login
auth.get("/logout",logout); // route for logout


module.exports = auth;