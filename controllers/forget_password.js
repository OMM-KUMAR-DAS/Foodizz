
const User=require("../models/signup")
const bcrypt=require("bcrypt")

exports.forget_user_password=async(req,res)=>{

    try{

        const{confirm_password,email}=req.body

        const isexistinguser= await User.findOne({email});
        
        console.log(isexistinguser)
        
        if(isexistinguser)
        {
            const hashedPassword = await bcrypt.hash(confirm_password,10)

            isexistinguser.password=hashedPassword

            isexistinguser.save()
              .then(()=>{
                try{
                    // console.log("password updated successfully")
                    return res.status(201).json({
                        success:'true',
                        message:"password updated succesfully",
                        data:isexistinguser
                    })

                }catch(err)
                {
                    return res.status(501).json({
                        success:"false",
                        message:"error updating password"
                    })
                }
              })
    
           
        }
        else{
            
            return res.status(404).json({
                success:"false",
                message:"email does not exist"
            })
        }


    }catch(err)
    {
         return res.status(501).json({
            success:'false',
            message:err
         })
    }
}
