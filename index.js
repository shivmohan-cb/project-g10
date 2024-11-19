const express = require("express");
const auth = require("./routes/auth");
const user = require("./routes/user");
const { ErrorHandler } = require("./utils/errorHandler");
const connectToDB = require("./utils/db");
const cookieParser = require("cookie-parser");
const verfiyToken = require("./utils/verifyToken");

const app = express();
app.use(express.static("public"));// static serving public folder
app.use(express.urlencoded({extended:false}));// bodyparser
app.use(cookieParser());// cookie parser
app.set('views', './views');// directory of views
app.set('view engine', 'ejs'); // set view engine

app.use("/auth",auth); // router for authentication
app.use("/user",user); // router for user - create ,update,delete

app.get("/",(req,res)=>{
   res.redirect("/home");
});

app.get("/home",verfiyToken,(req,res)=>{
   let user = req.user;
    if(user){
   res.render("home",{user});
    }
    else res.redirect("/auth/login");
});

app.use(ErrorHandler);// application level error handler
const port = 5050;
app.listen(port,(err)=>{
 connectToDB().then((res)=>{
    console.log(res);
    console.log(err?err:`Server is runnig on Port : ${port}`);
 });
});
