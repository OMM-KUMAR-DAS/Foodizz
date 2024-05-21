
const fod=require("../models/food")

exports.getbychoice = async(req,res) => {
        try{

           //get data
            const{choice}= req.query
            const cate= await fod.find({choice})

            if(!cate)
            {
                return  res.status(404).json({
                    success:false,
                    message:cate
                })
            }
            res.status(201).json({
                success:true,
                message:cate
            })
        }
        catch(error){
             res.status(500).send("oops")
        } 
}  