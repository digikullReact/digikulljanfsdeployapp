const express=require("express");
const userrouter=express.Router();
const {getUserdata,getUserdata2,editData,deleteData}=require("../controllers/user.controller");

const {allowAccess} =require("../middlewares/security.middleware");

//userrouter.use(allowAccess);  //routes level middleware --->

userrouter.get("/",getUserdata)
userrouter.get("/data",getUserdata2)

// Edit route first 

userrouter.put("/edit",editData);

// Delete route

userrouter.delete("/delete/:id",deleteData);


module.exports=userrouter;