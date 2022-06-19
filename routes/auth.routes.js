const express=require("express");
const authrouter=express.Router();
var multipart = require('connect-multiparty');
const {signUp, login,signUp2}=require("../controllers/auth.controller");
const {encryptPassword} =require("../middlewares/auth.middleware");
const path=require("path")
var multipartMiddleware = multipart({ uploadDir: path.join(__dirname,"uploads") });
authrouter.get("/healthcheck",(req,res)=>{
    res.send("SuccessFullyworking")
});
authrouter.post("/signup",multipartMiddleware,encryptPassword,signUp);
authrouter.post("/signup2",encryptPassword,signUp2);
authrouter.post("/login",login);


module.exports=authrouter;