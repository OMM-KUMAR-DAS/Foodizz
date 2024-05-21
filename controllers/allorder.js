const User= require('../models/signup')


exports.all_orders= async(req,res)=>{

    try{

        const{email}= req.query

        const user= await User.find({email}).select('orderlist').populate('orderlist.foods').exec()
        
        console.log(user.orderlist)

        return res.status(200).json({
            success:"true",
            message:user
        })



    }catch(err)

    {
           res.status(500).json({
            success:"false",
            message:err
           })
    }
}