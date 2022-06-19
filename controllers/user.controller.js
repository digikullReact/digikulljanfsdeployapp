const User=require("../models/User");
const getUserdata=(req,res)=>{


    // skip 
    // limit 

    const pageNumber=req.query.pageNumber;
    const limit=req.query.limit;
    const recordsPerPage=req.query.recordsPerPage
    const name=req.query.name;
    const sortOrder=req.query.sort;
    //console.log(name);

    // Promise all ---->
    User.find({name:{$regex:name}}).count().then(count=>{  // it gives total records in your collection --->

   // OFFSET --in mysql 
    User.find({name:{$regex:name,$options: 'i' }}).skip(parseInt(pageNumber)*parseInt(recordsPerPage)).limit(parseInt(limit)).sort({name:sortOrder}).then(response=>{

      //  console.log(response);
            // Will be querying the data
    res.json({
        message:"Success",
        data:response,
        totalcount:count
    })


    })

    })




}


const getUserdata2=(req,res)=>{


   // OFFSET --in mysql 
   User.find().then(response=>{

    //  console.log(response);
          // Will be querying the data
  res.json({
      message:"Success",
      data:response,
   
  })


  }).catch(err=>{
    console.log(err);
  })



 


}

const editData=(req,res)=>{

    const data=req.body;

    console.log(data);

    User.updateOne({_id:data._id},{$set:{name:data.name,email:data.email}}).then(result=>{

        res.json({
            message:"Update Success"
        })


    }).catch(err=>{

        res.json({
            message:"Failed"
        })

    })

 


}


const deleteData=(req,res)=>{

    const id=req.params.id;
    User.deleteOne({_id:id}).then(result=>{

        res.json({
            message:"SuccessFully Deleted"
        })

    }).catch(err=>{
        res.json({
            message:"Failed"
        })

    })

}


module.exports={
    getUserdata,
    editData,
    deleteData,
    getUserdata2

}