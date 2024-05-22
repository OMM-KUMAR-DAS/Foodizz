const mongoose=require("mongoose")
const foodSchema=new mongoose.Schema({
    
    image: {
        
        type: String,
    },

    title:{
        type:String,
        required:true,
        trim:true
    },

    des:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

    category:{
        type:String,
        required:true
    },
    
    choice:{
        type:String,
        required:true
    },

   
        

})

module.exports=mongoose.model("foood",foodSchema)