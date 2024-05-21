const User= require('../models/signup')


const delete_specific_address= async(req,res)=>{
    try{

        const{Email,addressid}= req.query


        const user= await User.findOne({email:Email})

        user.addresses= user.addresses.filter(address=>address._id.toString()!==addressid)

       

        await user.save()

        
       console.log("Address deleted successfully")

        return res.json({
            success:"true",
            message:user.addresses
        })
        
        

    }catch(err)
    {
        return res.status(501).json({
            success:"false",
            message:"Internal server error"
        })
    }
}

module.exports={delete_specific_address}