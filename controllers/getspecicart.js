

const User=require("../models/signup")


exports.getcartofoneuser = async(req,res) => {
        try{

           const{email}= req.query
           
           const exi= await User.find({email}).populate('carts').exec()

            return res.status(200).json({
                success:"true",
                message:exi,
            })
        }
        catch(error){
             res.status(501).json({
                success:"false",
                message:"Internal server error"
             })
        } 
}  