

const User=require("../models/signup")


exports.getcart = async(req,res) => {
        try{

           const{email,id}= req.body
           
           const existing= await User.find({email})

           if(!existing)
           {
            
            return res.status(404).json({
                success:false,
                message:"invalid user"
            })
           }
           

           const v= await User.findOneAndUpdate({email},{$push:{carts:req.body.id}},{new:true}).populate('carts').exec()

            res.status(201).json({
                success:true,
                message:v
            })
        }
        catch(error){
             res.status(500).send("oops")
        } 
}  