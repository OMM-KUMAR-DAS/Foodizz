const bcrypt=require("bcrypt")


const User=require("../models/signup")

const jwt =require("jsonwebtoken")

require("dotenv").config()


exports.signup = async(req,res) => {
        try{

           //get data

            const {name,email,password,role} = req.body

            const existinguser = await User.findOne({email})

            if(existinguser)
            
            {
                return res.status(404).json({
                     success:false,
                     message:"user already exists"})
            }


            //secure password

            let hashedPassword

            try{
                hashedPassword = await bcrypt.hash(password,10)
            }
            catch(err){
                return res.status(500).json({
                    success:failure,
                    message:"error in hashing password"
                })
            }

            const adduser = await User.create({name,email,password:hashedPassword,role})
        
            res.status(201).json({
                success:true,
                message:adduser
            })
        }
        catch(error){
             res.status(500).send("oops")
        } 
}  


exports.login = async(req,res)=>{
    try{

        const{email,password}=req.body



        const user = await User.findOne({email})

        if(!user)
        {
            return res.status(401).json({
                success:false,
                message:"user is not registered"
            })
        }
        
        //verify the password

        const payload={
             email:user.email,
             id:user._id,
             name:user.name,
             role:user.role
        }

        if(await bcrypt.compare(password,user.password))
        {
                let token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'5h',})
                
               

                res.status(200).json({
                    success:true,
                    token,
                    user,
                    message:"user logged in succesfully",
                })
        }

        else{
            console.log("pass wrong")
            return res.status(403).json({
                success:false,
                message:"password incorect"
            }) 
        }
    }

    catch(error)
    {
           res.status(500).json({
            message:"login failure"
           })
    }
}
    