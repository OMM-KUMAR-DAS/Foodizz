const User= require('../models/signup')


const updateaddress= async(req,res)=>{

    try{



        const{Email,address_id,name,phonenumber,Pincode,address}= req.body

        if(!/^.{6}$/.test(Pincode))
            {
                return res.json({
                    success:"false",
                    message:"pincode should be 6 digit"
                })
            }

        
        const user= await User.findOne({email:Email}).select('addresses').exec()


        const dd= user.addresses.find((address)=>{return address._id.toString()===address_id})

        if(dd.Name===name  && dd.Phonenumber.toString()===phonenumber && dd.pincode.toString()===Pincode && dd.Address===address)
            {
                return res.json({
                    success:"false",
                    message:"Same Address No changes made"
                })
            }

       

      dd.Name=name
      dd.Phonenumber=phonenumber
      dd.pincode=Pincode
      dd.Address=address

      await user.save()



        return res.json({
            success:"true",
            message:"Address updated successfully",
            dat:user
        })

    }

    catch(err)

    {

        return res.status(501).json({

            success:"false",

            message:"Internal server error",
            
            error:err

        })

    }
}

module.exports={updateaddress}