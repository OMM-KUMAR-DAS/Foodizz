const User= require('../models/signup')


const addinguserAddres= async(req,res)=>{

    try{

        const{Email,name,phonenumber,Pincode,address}=req.body


        //you can set any country code as i have implemented for india 

        country_code="IN"

        
        if(!/^.{6}$/.test(Pincode))
            {
                return res.json({
                    success:"false",
                    message:"pincode should be 6 digit"
                })
            }
        const user= await User.findOne({email:Email})

        if(user.addresses.length>=3)
            {
                return res.json({
                    success:'false',
                    message:"Cannot add more"
                })
            }

        user.addresses.push({Name:name,Phonenumber:phonenumber,pincode:Pincode,Address:address})

        await user.save();

        return res.status(201).json({
            success:"true",
            message:"Address added successfully",
            dat:user.addresses
        })

        

    }catch(err)
    {
           return res.status(501).json({
            success:"false",
            message:"Internal server error"
           })
    }
}

module.exports= {addinguserAddres}