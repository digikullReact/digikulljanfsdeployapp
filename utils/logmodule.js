const path=require("path");
const fs=require("fs");
class ErrorLog{
    constructor(fileName){
        console.log(__dirname)

        this.file=path.join(__dirname,fileName);
    }


  logerror(msg){

    fs.appendFileSync(this.file,JSON.stringify(msg));



  }

  loginfo(msg){
    fs.appendFileSync(this.file,JSON.stringify(msg));

  }





}


module.exports= ErrorLog;