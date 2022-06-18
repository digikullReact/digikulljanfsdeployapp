const key="Secretkey";
const jwt =require("jsonwebtoken");

const allowAccess=(req,res,next)=>{

    // I am gonna be checking for the token 
  //  console.log(req.headers);
    const token=req.headers.token;

    if(token){
        // validate the token

        // verify a token symmetric
jwt.verify(token, key, function(err, decoded) {
    if(err){

        res.json({
            message:"Token Not Valid "
        })

    }
    else{
        next();
    }
   
  });
      
    }
    else{
        res.json({
            message:"Restricted  Access"
        })
    }

    
}

module.exports={
    allowAccess

}