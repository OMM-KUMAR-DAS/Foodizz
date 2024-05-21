
const fod=require("../models/food")

exports.addfoods = async(req,res) => {
        try{

           //get data

            const {image,title,des,category,choice,price} = req.body

            
            const addfood = await fod.create({image,title,des,category,choice,price})
        
            res.status(201).json({
                success:true,
                message:addfood
            })
        }
        catch(error){
             res.status(500).send("oops")
        } 
}  