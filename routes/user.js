const express=require("express")
const router=express.Router()
// const User=require("../models/signup")

const{signup,login} = require("../controllers/Auth")
const{auth,isStudent,isAdmin}=require("../middelwers/auth")
const{valiemail}= require("../controllers/validateemail")

const{forget_user_password}= require("../controllers/forget_password")


const{addinguserAddres}= require("../controllers/addAdress")

const{delete_specific_address}= require("../controllers/deleteaddress")


const{user_specific_address}= require("../controllers/fetchinguserspecificaddress")

const{updateaddress} =require("../controllers/updateaddress")

const{settingdefaultaddress,gettingselectedaddress}= require("../controllers/settingaddress")

router.post("/signupp",signup)
router.post("/log",login)


//Protected routes-----------------------------------------------

router.post("/student",auth,isStudent,(req,res) =>

{ 
    
    res.status(200).json({
        success:true,
        message:"Welcome to the food app", 
    })
})

router.post("/admin",auth,isAdmin,(req,res) =>{
    res.json({
        success:true,
        message:"welcome Admin"
    })
})

//------------------------------------------------------

router.post("/vali",valiemail)


router.post('/forgetpassword',forget_user_password)

router.post('/addingAddress',addinguserAddres)

router.delete('/delete_specificaddress',delete_specific_address)

router.get('/useraddress',user_specific_address)

router.put('/update_address',updateaddress)

router.post('/setting_defaultaddress',settingdefaultaddress)

router.get('/getting_defaultaddfess',gettingselectedaddress)



module.exports=router;