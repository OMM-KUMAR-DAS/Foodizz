const User= require('../models/signup')

// //setting default address of a user

const settingdefaultaddress= async(req,res)=>{

    try{
      
        const{Email,addressid}=req.body

        //this method is used to reset the entire addresses isDefault to false------------------------------------------------------------------
        
        //this command is very useful as it apply changes to all the feilds which you will mentioned after $[] sign of an array of address 

        await User.updateOne(
            { email: Email },
            { $set: { 'addresses.$[].isDefault': false } }
          );
        //------------------------------------------------------------------------------------------------------------------------------

         // Set isDefault to true for the found address------------------------------------------------------

         //this command directly update the required matched item from array of address

         await User.updateOne(
        { email: Email, 'addresses._id': addressid },
        { $set: { 'addresses.$.isDefault': true } }
        );

        //---------------------------------------------------------------------------------------------


        // the below command is very useful for retriving a particular item from array of objects of a particular user-------------------
        

        const user = await User.findOne(
            { email:Email, 'addresses._id': addressid },
            { 'addresses.$': 1 }

           );
        //-------------------------------------------------------------------------------------------------
        
        return res.json({
            success:"true",
            message:user
        })


    }catch(err)
    {
        return res.status(501).json({
            success:"false",
            message:"Internal server error",
            error:err
        })
    }
}




//getting selected address


const gettingselectedaddress= async(req,res)=>{
    try{

       const{Email}=req.query

       const user = await User.findOne(
        { email:Email, 'addresses.isDefault': true },
        { 'addresses.$': 1 }

       );

       console.log(user)

       return res.json({
        success:"true",
        message:user
       })

    }catch(err)
    {
        return res.status(501).json({
            success:"false",
            message:"Internal server error",
            error:err
        })
    }
}

module.exports={settingdefaultaddress,gettingselectedaddress}