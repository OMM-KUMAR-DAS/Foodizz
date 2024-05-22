const jwt=require("jsonwebtoken")


require("dotenv").config()

exports.auth=(req,res,next) =>{
    try{
        const token= req.body.token

        
        console.log(token)

        //verify the token

        
            const decode=jwt.verify(token,process.env.JWT_SECRET)  
            
            console.log(decode)
            //storing the payload in req.cl
            req.cl=decode

        
            next()

    }catch(error)
    { 
          return res.status(401).json({
            success:"false",
            message:"Something went wroong"
          })
    }
}

//USED FOR AUTHORIZATION


exports.isStudent=(req,res,next)=>{
    try{
        if(req.cl.role !="Student")
        {
            return res.status(401).json({
                
                success:"false",
                message:"entry restricted"
            })
        }
        next();

    }catch(error)
    {
        return res.status(501).json({
            
            success:false,
            message:"Internal server Error"


        })
    }
}

exports.isAdmin=(req,res,next)=>{
    try{
        if(req.cl.role !="Admin")
        {
            return res.status(401).json({
                success:false,
                message:"entry restricted"
            })
        }
        next()

    }catch(error)
    {
        return res.status(501).json({
            success:false,
            message:"Internal server error"


        })
    }
}