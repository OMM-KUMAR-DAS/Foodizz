
const fod=require("../models/food")

exports.getall = async(req,res) => {
        try{

           //get data

            const cate= await fod.find()
            res.status(201).json({
                success:"true",
                message:cate
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