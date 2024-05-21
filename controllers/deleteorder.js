const User= require('../models/signup')


//delete a particular order of a user

//not implemeneted properly


exports.delete_order = async(req,res) => {
        try{

          const{email,id,orderId}=req.body
          
        

            console.log(email)
            console.log(orderId)
            console.log(id)
            
            const result = await User.updateOne(
                { email, "orderlist._id": orderId },
                { $pull: {"orderlist.$.foods":{ _id: id } } },{new:true}
            ).populate('orderlist.foods').exec();

            // console.log(result)

           const gg= await User.find({email}).select('orderlist').populate('orderlist.foods').exec()

           
            res.status(201).json({
                success:true,
                data:gg ,message:gg
            })
        }

        catch(error){
             res.status(500).send("oops")
        } 
}  

//delete all orders of a particular user

exports.delete_allorder = async(req,res) => {
    try{

      const{email}=req.query
      

       console.log("hello omm")
       const de= await User.updateOne({email},{$set:{orderlist:[] } },{new:true}).exec()

       const gg= await User.find({email}).select('orderlist').exec()

        res.status(201).json({
            success:"true",
            data:gg
            
        })
    }
    catch(err){
         res.status(500).json({
            success:"false",
            message:"Internal server error",
            error:err
         })
    } 
}  

