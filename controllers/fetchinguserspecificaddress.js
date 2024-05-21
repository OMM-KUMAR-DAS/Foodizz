const User= require('../models/signup')


const user_specific_address= async(req,res)=>{
    try{

        const{Email}=req.query

        const user= await User.findOne({email:Email})


        console.log(user)


        return res.json(user.addresses)

    }catch(err)
    {
    
          return res.status(500).json({
            success:'false',
            message:"Internal server error",
            data:console.error()
          })
    }
}

module.exports={user_specific_address}