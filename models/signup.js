const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        trim:true
    },

    password:{
        type:String,
        required:true
    },

   
    role:{
        type:String,
        enum:["Admin","Student"]
    },


    carts:[{type:'ObjectId',ref:'foood'}],

    // orderlist:[{type:'ObjectId',ref:'foood'}],

    orderlist: [{
        foods: [{ type: 'ObjectId', ref: 'foood' }],
        orderedAt: { type: String } 
    }],

    addresses:[{
        
        Name:{
            type:String,
            required:true,
        },

        Phonenumber:{
            type:Number,
            required:true,
        },

        pincode:{
            type:Number,
            required:true
        },

        Address:{
            type:String,
            required:true
        },
        isDefault: {
            type: Boolean,
            default: false
        }
    }]

   




})

module.exports=mongoose.model("user",userSchema)