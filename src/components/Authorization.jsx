import React, { useEffect } from 'react'

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import { useNavigate } from 'react-router-dom';
 import { Box,Button} from '@mui/material'; 

 

const Authorization = () => {

  const ele= useSelector((state)=>state.tok)
  const navigate= useNavigate()
  console.log(ele[0])
  // console.log(ele[0].token)
  console.log(ele[0].user.role)



  useEffect(()=>{

    toast.dark(`Click on the Authorized Button`, {
      position: toast.TOP_CENTER
    });

  },[])
  function handelclient()
  {

          fetch("http://localhost:8000/api/v1/student",{

          method:"POST",


          headers:{
            "Content-Type":"application/json",
          },
         
            body:JSON.stringify({

              token:ele[0].token,
             
           })
          
      })

      .then(response=>response.json())

      .then(data=>{console.log(data)
        
                if(data.success==="false")
                { 
                  toast.error(`Entry Restricted`, {
                    position: toast.TOP_CENTER
                  });
                    
                }
                else {
                  toast.success(`${data.message}`, {
                    position: toast.TOP_CENTER
                  });
                  navigate('/student')
                }
               
      
      });
  }

  function handeladmin()
  {

          fetch("http://localhost:8000/api/v1/admin",{

          method:"POST",

          headers:{
            "Content-Type":"application/json",
          
          },
         
            body:JSON.stringify({

              token:ele[0].token,
             
           })
          
      })

      .then(response=>response.json())

      .then(data=>{console.log(data)
        
                if(data.success===false)
                { 
                    toast.error(`Entry Restricted`, {
                      position: toast.TOP_CENTER
                    });
                    
                }
                else {
                  toast.success(`${data.message}`, {
                    position: toast.TOP_CENTER
                  });
                  navigate('/admin')
                }
               
      
      });
  }



  return (


   

  <Box sx={{minHeight:'100vh',backgroundImage:'url(https://as1.ftcdn.net/v2/jpg/07/17/89/30/1000_F_717893068_0I7BOclxoJUAiVoZMcbwoOhWDJtYMZHY.jpg)',backgroundRepeat:'no-repeat', backgroundSize: 'cover',
  backgroundPosition: 'center',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    
    
    <Box sx={{display:'flex',justifyContent:'center',width:'100vw',height:'100%'}}>
           
           <Button onClick={handeladmin}  sx={{backgroundColor:"#342e37",borderRadius:'100px',padding:'10px',color:'whitesmoke',width:'25%',marginLeft:'70px',
            boxShadow: '0 0 20px 10px rgba(255, 255, 255, 0.8)',
           '&:hover': {
            backgroundColor: "#342e37",
          },
          '@media (max-width:500px)':{
            width:'45%',
            marginLeft:'30px'
          }
            
              
            

           }} >Admin</Button>


           <Button onClick={handelclient} sx={{backgroundColor:"#342e37",borderRadius:'100px',padding:'10px',color:'whitesmoke',width:'25%',
            boxShadow: '0 0 20px 10px rgba(255, 255, 255, 0.8)',
             '&:hover': {
              backgroundColor: "#342e37",
            },
            '@media (max-width:500px)':{
              width:'45%'
            }
           }}>Student</Button>
    </Box>
    
  </Box> 
  )
}

export default Authorization

