const User=require("../models/User");
const {passwordCompare,jwtGen} =require("../utils/utils");
const sendEmail=require("../mail");
const fs=require("fs");
var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'snapclean', 
    api_key: '923722868547732', 
    api_secret: '31gOx5FAAEByxYkcuEWLrL5Tq38',
    secure: true
  });




const signUp=(req,res,next)=>{

const splitArray=req.files.file.path.split("/")

var imageFile = req.files.file.path;

const user=new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    profilePicture:splitArray[splitArray.length-1]
     //profilePicture:result.url

})

user.save().then(data=>{

    res.json({
        message:"User data saved",
        
    })
      
 
  
  
    
    }).catch(err=>{
  
      next(err);
  
    })

    /*

cloudinary.uploader.upload(imageFile, 
function(error, result) {
    if(error){
        console.log(error);
    }
    else{
        const user=new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            profilePicture:splitArray[splitArray.length-1]
             //profilePicture:result.url
      
        })
      
        user.save().then(data=>{
      
        ///  sendEmail(data.email,"success");
        fs.unlink(imageFile,()=>{
            console.log("file deleted");

            res.json({
                message:"Successfully registered"
            })
        })
      
      
        
        }).catch(err=>{
      
          next(err);
      
        })
    }
   

});

*/






}


const login=(req,res)=>{

    User.findOne({email:req.body.email}).then(result=>{
      //  console.log("db password",result.password.toString())
       // console.log("user password",req.body.password.toString()==result.password.toString())

        // We have to compare the passwords too
        passwordCompare(result.password,req.body.password).then(data=>{
            if(data){
                // PAssowrd matched successfully
                jwtGen({username:result.email}).then(token=>{

                    res.json({
                        message:"Login success",
                        token:token
                    })

                })

             
            }
            else{

                res.json({
                    message:"Login Failed,Passwords donot match"
                })
            }
        })


    }).catch(err=>{
        res.json({
            message:"No user Found !!"
        })
    })

   
  
  }
  


module.exports={
    signUp,
    login

}