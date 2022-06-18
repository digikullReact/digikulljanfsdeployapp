const express=require("express");
const app=express();
const cors=require("cors");

const authrouter=require("./routes/auth.routes");
const userrouter=require("./routes/user.routes");
const fileuploadrouter=require("./routes/fileupload.routes");
const { allowAccess } = require("./middlewares/security.middleware");
const errorMiddleware=require("./middlewares/error.middleware");
// /auth/login
// /auth/signup
app.use(express.json());

app.use(cors());


app.use(express.static('./routes/uploads/'))





app.use("/auth",authrouter);  // publicly available

//app.use(allowAccess)

app.use("/user",userrouter)  // only available after the logging in 

app.use("/file",fileuploadrouter);

app.use(errorMiddleware);

module.exports=app;