const express=require("express");
const fileuploadrouter=express.Router();
var multipart = require('connect-multiparty');
const path=require("path")
var multipartMiddleware = multipart({ uploadDir: path.join(__dirname,"uploads") });
const {fileupload} =require("../controllers/file.controller");



fileuploadrouter.post("/upload",multipartMiddleware,fileupload)



module.exports=fileuploadrouter;