const express = require("express")
const { UserModel } = require("../models/user.model")
const userRouter = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


// for register
userRouter.post("/register",async( req,res)=>{
    const {email,password} = req.body
    const userExist = await UserModel.find({email})
    try {
        if(userExist.length){
            res.status(400).send({error : "user Already prresent"})
        }
        if(checkPass(password)){
            const hashPass = bcrypt.hashSync(password,7)
            const user = new UserModel({...req.body,password:hashPass})
            await user.save()
            res.status(200).send({msg:"The new user has been registered",registeredUser:user})
        }
        res.status(400).send({error : "Check the password"}) 
    } catch (error) {
        res.status(400).send({error:error.message})
    }
   
})
// for login

userRouter.post("/login",async(req,res)=>{
    const {email,password}= req.body
    const userExist = await UserModel.findOne({email})
    try {
        if(userExist){
            bcrypt.compare(password,userExist.password,(err,result)=>{
                if(err){
                    res.status(400).send({err:err.message})
                }
                var token = jwt.sign({ course: "MERN" }, "netflix",{
                    expiresIn: 840
                });
                if(token){
                    res.status(200).send({msg:"Login successful!","token":token})
                }
            })
        }
    } catch (error) {
        res.status(400).send({error:error.message})
    }

})

module.exports = {
    userRouter
}






// => At least one uppercase character
// => At least one number
// => At least a special character
// => The length of password should be at least 8 characters long
// If a user already exist, a new user with same email cannot register, send appropriate response in this case.
function checkPass(pass){
    if(pass.length<8){
       return false
    }
    let alp ="abcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let spc = "!@#$%^&*(){}[]=-/`~_"
 
    let flag1 = false
    let flag2 = false
    let flag3 = false
 
    for(let i=0;i<pass.length;i++){
     if(alp.includes(pass[i])){
         flag1 =true
     }
     if(num.includes(pass[i])){
         flag2 =true
     }
     if(spc.includes(pass[i])){
         flag3 =true
     }
    }
    return flag1 && flag2 && flag3 ? true :false
 }
 // console.log(checkPass("hello@12344"))