const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key="Secretkey";

const passwordCompare=async(dbPassword,enteredPassword)=>{
    try {
       return await  bcrypt.compare(enteredPassword, dbPassword);
       
    } catch (error) {

        return false;
        
    }





}

const jwtGen=async(userdata)=>{
    try {
        
        const token = await jwt.sign(userdata, key); // calling the method to generate token
       

        return token;
       
    } catch (error) {

        console.log(error);

        return false;
        
    }





}

module.exports={
    passwordCompare,
    jwtGen
}