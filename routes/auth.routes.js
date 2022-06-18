const express=require("express");
const authrouter=express.Router();
var multipart = require('connect-multiparty');
const {signUp, login}=require("../controllers/auth.controller");
const {encryptPassword} =require("../middlewares/auth.middleware");
const path=require("path")
var multipartMiddleware = multipart({ uploadDir: path.join(__dirname,"uploads") });
authrouter.get("/healthcheck",(req,res)=>{
    res.send("SuccessFullyworking")
});
authrouter.post("/signup",multipartMiddleware,encryptPassword,signUp);
authrouter.post("/login",login);


module.exports=authrouter;