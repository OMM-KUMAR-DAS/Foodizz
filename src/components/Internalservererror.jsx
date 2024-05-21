import { Box,Typography} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react';




const Internalservererror = () => {

  const navigate= useNavigate()

  
  const animatedData= require('c:/Users/HP/Downloads/Animation - 1716221862482.json')
 
  return (
    <>
      <Box sx={{width:'100%',display:'flex', justifyContent: 'center',alignItems: 'center',minHeight:'100vh',backgroundColor:'salmon',flexDirection:'column'}}>

                                        <Lottie
                                            animationData={animatedData}
                                            loop
                                            autoplay
                                            style={{width:'500px',maxWidth:'90%',fontWeight:'bold'}}
                                            
                                           
                                        />

                                        <Typography sx={{color:'whitesmoke',backgroundColor:'black',padding:'10px',borderRadius:'20px'}}>Try after some Time</Typography>
                                       

        
      </Box> 

     
     
     
        
    </>
  )
}

export default Internalservererror