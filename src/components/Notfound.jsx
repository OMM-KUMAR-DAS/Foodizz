import React from 'react'
import Lottie from 'lottie-react'
import {Box} from "@mui/material";


const Notfound = () => {

    const animatedData= require('c:/Users/HP/Downloads/Animation - 1716238078717.json')

  return (
        

    <Box sx={{width:'100%',display:'flex', justifyContent: 'center',alignItems: 'center',minHeight:'100vh',backgroundColor:'salmon',flexDirection:'column'}}>

                <Lottie
                    animationData={animatedData}
                    loop
                    autoplay
                    style={{width:'700px',maxWidth:'90%',fontWeight:'bold'}}
                    
                
                />

               
            


    </Box> 
  )
}

export default Notfound