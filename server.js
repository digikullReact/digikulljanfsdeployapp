require("dotenv").config();
const app=require("./app");
const port=process.env.PORT || 8081;
const dbConnect=require("./db");
const ErrorLog=require("./utils/logmodule");
const loggerEObject=new ErrorLog("logs/error.log")
dbConnect(process.env.MONGO_URL).then(()=>{

    app.listen(port,()=>{

        loggerEObject.logerror({message:`DB connected ,Server Running At Port ${port}`})
   
        console.log(`DB connected ,Server Running At Port ${port}`);
    })
    

  

}).catch(err=>{
    console.log("Error Connecting With Db")
})



