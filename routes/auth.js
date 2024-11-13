const { login, logout } = require("../controllers/auth.controller");

const auth  = require("express").Router();

auth.get("/login",login); // route for login
auth.get("/logout",logout); // route for logout


module.exports = auth;