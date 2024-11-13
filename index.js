const express = require("express");
const auth = require("./routes/auth");
const user = require("./routes/user");
const { ErrorHandler } = require("./utils/errorHandler");

const app = express();

app.use(express.urlencoded({extended:false}));// bodyparser

app.set('views', './views');// directory of views
app.set('view engine', 'ejs'); // set view engine

app.use("/auth",auth); // router for authentication
app.use("/user",user); // router for user - create ,update,delete

app.get("/",(req,res)=>{
 res.render("home");
});

app.use(ErrorHandler);// application level error handler
const port = 5050;
app.listen(port,(err)=>{
console.log(err?err:`Server is runnig on Port : ${port}`);
});
