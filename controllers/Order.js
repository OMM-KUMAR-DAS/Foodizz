
const User=require("../models/signup")
const moment= require('moment')

exports.order_list = async(req,res) => {
    console.log("hello server")
   
        try{


        

           const{email,arr}=req.body

    

        const dateTimeDay = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

            
        const u = await User.findOneAndUpdate(
            { email }, 
            { 
                $push: { 
                    orderlist: {
                        foods: arr,
                        orderedAt: dateTimeDay 
                    }
                }
            },
            { new: true } 
        ).populate('orderlist.foods').exec();
        
           const w= await User.find({email}).select('orderlist').populate('orderlist.foods').exec()
        
           console.log(u)

            res.status(201).json({
                success:"true",
                data:arr,
                updated_orderlist:w
               
            })
        }
        catch(error){
             res.status(500).json({
                 success:"false",
                 message:"order not placed"
             })
        } 
}  