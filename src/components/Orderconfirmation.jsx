import React from 'react'
import {  useDispatch} from 'react-redux'

import {Typography,Button,Box} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { del_ete } from '../store/selectSlice';
import Lottie from 'lottie-react';


const Orderconfirmation = () => {

 
  const navigate=useNavigate()
  const dispatch= useDispatch()
  const animatedData=require('C:/Users/HP/Downloads/Animation - 1713767323835.json')

 


  function clear_selected(targeted_route)
  {
        if(targeted_route==="shopping")
        {
          dispatch(del_ete())
          navigate('/student')
        }
        else{
          dispatch(del_ete())
          navigate('/order')
        }
       
  }

  return (

  <Box sx={{backgroundColor:'#0d1f2d',width:'100vw',height:'100vh'}}>
    
          <Typography variant='h3' sx={{width:'100',marginLeft:'auto',marginRight:'auto',textAlign:'center',fontWeight:'bold',
          backgroundColor:'black',backgroundImage:'linear-gradient(45deg, #f3ec78, #af4261)',
          backgroundRepeat:'repeat',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', 
          MozBackgroundClip: 'text',
          MozTextFillColor: 'transparent',
          }} >Order placed Successfully</Typography>


                                  <Lottie
                                    animationData={animatedData}
                                    loop
                                    autoplay
                                    style={{ width: '25%',marginLeft:'auto',marginRight:'auto',marginTop:'50px',
                                   
                                     }}
                                   
                                  />



          
        
             
    

        <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            
           <Typography varient="h5" sx={{color:'whitesmoke',fontWeight:'bold',marginBottom:'20px'}}>Your order is on the way</Typography>
          
        </Box>  
         

          
         
     

     <Box sx={{width:'100vw',display:'flex',flexWrap:'wrap',alignItems:'center',
     justifyContent:'space-around',
     marginTop:'25px',
     
     '@media (max-width: 550px)': {
      flexDirection: 'column',
      alignItems: 'center',
     
    },

    
     }}>

            <Button onClick={()=>{clear_selected("shopping")}} sx={{borderRadius:'25px',border:'2px solid white',color:'yellow',
               width:'25%',
               '@media (max-width:550px)':{
                width:'50%',
               },
               '&:hover': {
                transform: 'scale(1.1)', 
                transition: 'transform 0.6s ease', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 6px 20px rgba(255, 255, 255, 0.3)'
              },

              }}

              >Explore</Button>

            <Button sx={{borderRadius:'25px',border:'2px solid white',color:'yellow',width:'25%',
              '@media (max-width:550px)':{
                width:'50%',
                marginTop:'25px',
               
               },
               '&:hover': {
                transform: 'scale(1.1)', 
                transition: 'transform 0.6s ease', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 6px 20px rgba(255, 255, 255, 0.3)'
              },
               
               }} onClick={()=>{clear_selected("orders")}}>Go to My orders</Button>
            

     </Box> 

     <br></br>
     

    

  </Box>   
  )
}

export default Orderconfirmation