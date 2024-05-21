
const fod=require("../models/food")

exports.getbycate = async(req,res) => {
        try{

           //get data

            const {category} = req.query
            console.log(req.query.category)
            console.log("hello")
            const cate= await fod.find({category})

            if(!cate)
            {
                return res.status(404).json({
                    success:false,
                    message:"Invalid category"
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