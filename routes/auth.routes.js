const express=require("express");
const authrouter=express.Router();
var multipart = require('connect-multiparty');
const {signUp, login,signUp2}=require("../controllers/auth.controller");
const {encryptPassword} =require("../middlewares/auth.middleware");
const path=require("path");
const sendEmail = require("../mail");
var multipartMiddleware = multipart({ uploadDir: path.join(__dirname,"uploads") });
authrouter.get("/healthcheck",(req,res)=>{
    res.send("SuccessFullyworking")
});
authrouter.get("/sendEmail",(req,res)=>{
    sendEmail("shubhamdixit865@gmail.com","this is a test email to test something")
    res.send("worked");
});

authrouter.post("/signup",multipartMiddleware,encryptPassword,signUp);
authrouter.post("/signup2",encryptPassword,signUp2);
authrouter.post("/login",login);


module.exports=authrouter;