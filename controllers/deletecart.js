
const User=require("../models/signup")

exports.deletecarts = async(req,res) => {
        try{

          const{email,id}=req.query 

           const de= await User.updateOne({email},{$pull:{carts:id}},{new:true}).populate('carts').exec()

           const gg= await User.find({email}).populate('carts').exec()

           
            res.status(201).json({
                success:true,
                message:de,
                data:gg
                
            })
        }
        catch(error){
             res.status(500).send("oops")
        } 
}  