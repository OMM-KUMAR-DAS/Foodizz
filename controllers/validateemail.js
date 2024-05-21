const User= require('../models/signup')

exports.valiemail= async(req,res)=>{
    try{

        const{email}= req.body;

        const vali= await User.find({email})

        if(!vali)
        {
            return res.status(404).json({
                success:"false",
                message:"user not exist"
            })
        }

        res.status(200).json({
            success:"true"
        })

    }catch(err)
    {  
        res.status(500).json({
            message:err
        })
          
    }
}