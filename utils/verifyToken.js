const JWT = require("jsonwebtoken");
const { CreateError } = require("./errorHandler");

const verfiyToken = async (req,res,next) =>{
  //check if token is there
    let token = req.cookies.token;
    if(!token) next(CreateError(402,"Access denied"));
    else {
    JWT.verify(token,"Secret",(err,decode)=>{
       if(err) next(CreateError(401,"UnAuthorized"));
       else {
          req.user = decode;
          next();// continue the execution
       }
     });
    }
}

module.exports = verfiyToken;