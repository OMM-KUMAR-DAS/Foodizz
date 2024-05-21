import React, { useState } from 'react'
import { useSelector} from 'react-redux';
import { useEffect } from 'react'
import { Typography,Box,Slide,IconButton,Dialog,DialogContent,DialogTitle,DialogActions,Button,CircularProgress } from '@mui/material';
import {useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@mui/icons-material/Close';
import Lottie from 'lottie-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const Myorder = () => {
  
  const ele= useSelector((state)=>state.tok)
  const navigate= useNavigate()
  const animationData = require('C:/Users/HP/Downloads/Animation - 1713766432410.json');
  const animationDat= require('c:/Users/HP/Downloads/PUQ9I86Xum.json')

  const[order,seto]= useState([])
  const[open,setopen]= useState(false)
  const[loader,setloader]= useState(true)
    

    
    useEffect(()=>{
        
        console.log('hello')

        function fetchorder()

        {

          
            try{

              fetch(`http://localhost:8000/api/v2/allorder?email=${ele[0].user.email}`)
              .then(response=> response.json())
              .then(data=>{
               
               
                  if(data.success==="false")
                  {

                    console.log("internal error")
                    toast.info(`Cannot fetched order history`, {
                      position: toast.BOTTOM_RIGHT
                    });
                    navigate('/internal_server')
                  }
                  else{
                    seto(data.message[0].orderlist)
                    setloader(false)
                  }
                 
                  
              })

            }catch(err)
            {
              console.log(err)
            }
              
        }    

              
              
        

        fetchorder()

    },[])


   if(loader)
    {
      return (

        <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',marginTop:'250px' }}>
        <CircularProgress color="success" />
       </Box>
      )
    }



    
               
    
    function deleteall()
    {
            try
            {

              fetch(`http://localhost:8000/api/v2/deleteall?email=${ele[0].user.email}`,{

              method: 'DELETE',
              headers: {
              'Content-Type': 'application/json',
              },
              })
              .then(response=>response.json())
              .then(data=>{
                
                  console.log(data)
                  if(data.success==="false")
                    {
                      toast.info(`Order history cannot be cleared`, {
                        position: toast.BOTTOM_RIGHT
                      });
                      navigate('/internal_server')
                    }
                    else{

                      console.log(data.data[0].orderlist)
                      seto([])
                      setopen(false)
                    }
                  

              })


            }catch(err)
            {
              console.log(err)
            }
              
     

    }

    function handleOpen()
    {
      setopen(true)
    }

    function handleClose()
    {
      setopen(false)
    }

    function gotohome()
    {
      navigate('/student')
    }

    

    

  return (


    
   


    <Box sx={{width:'100%',minHeight:'100vh',backgroundColor:'#e4fde1'}}>



          <Box sx={{width:'100%',backgroundColor:'black',padding:'10px',marginBottom:'30px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:'0'}}>

                   
                   
                    
                    <Lottie
                                    animationData={animationDat}
                                    loop
                                    autoplay
                                    style={{ width: '15%',height:'35px'}}
                                    onClick={gotohome}
                                  />
                    
                     

                   
                    

                    <Typography sx={{width:'100%',color:'white',textAlign:'center',fontWeight:'bold',fontSize:'30px',
                    }}>Order History</Typography>



                 
                  
                        {order.length !== 0 && (
                          
                          <Lottie
                                    animationData={animationData}
                                    loop
                                    autoplay
                                    style={{ width: '30%',height:'70px'}}
                                    onClick={handleOpen}
                                  />
                          
                        )}
                                              
                

          </Box>  

 {order.length!==0 ?


          
             <Box sx={{width:'100%',display:'flex',flexDirection:'column',
                         height:'100%',
                         
                          }} >

                         { order.map((fod,index)=>(
                         
                          <Box key={index} 
                            
                         >

                               {fod.foods.map((food,index)=>(
                                
                                  <Box key={index} sx={{ display: 'flex', flexDirection: 'row', gap: '10px',alignItems: 'center',
                                  marginBottom:'15px',
                                  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
                                  backgroundColor:'#f9f9ed',
                                  borderRadius:'25px'
                                  }} >    

                                            
                                               <img src={food.image} alt=" "
                                               style={{width:'15%',borderRadius:'50%',
                                               transition: 'transform 0.3s', 
                                               '&:hover': {
                                               transform: 'scale(1.1)',
                                               },
                                               marginRight:'25px'
                                     
                                               }}/> 

                                       <Box sx={{width:'50%',
                                        '@media (max-width: 600px)':{
                                          width:'100%'
                                        }
                                       }}>

                                               <Typography sx={{fontweight:'bold',marginBottom:'10px',
                                                  '@media (max-width: 600px)':{
                                                    fontSize:'15px',
                                                    marginBottom:'5px'
                                                  }

                                                  }}>{food.title}</Typography> 

                                               <Typography sx={{fontweight:'bold',marginBottom:'10px',
                                                '@media (max-width: 600px)':{
                                                  fontSize:'15px',
                                                  marginBottom:'5px'
                                                }
                                               }}
                                               >&#8377;{food.price}</Typography> 

                                               <Typography sx={{'@media (max-width: 600px)':{
                                                  fontSize:'15px'
                                                }}}>{fod.orderedAt}</Typography>
                                       </Box> 

                                 

                                       

                                </Box>

                               

                               ))}

                     </Box>))}

                       



                                                             

                        
                          

                       
                           
                       
       </Box>:
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>

             

                 <img src="https://media.tenor.com/StwFLN2BQ94AAAAi/yellow-cab-yellow-cab-pizza.gif" alt='' style={{width:'25%',marginTop:'50px'}}></img>

                 
                 

               
            </Box>   
               }

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
       
      >
                  <DialogTitle>
                           
                             <IconButton
                             
                             onClick={handleClose}
                             >

                                <CloseIcon/>

                              

                             </IconButton>

                  </DialogTitle>

                   <DialogContent>
                    
                      Do you really want to clear your order history?
                      Remember they will not be visible to you anymore.
                    
                   </DialogContent>


                   <DialogActions>
                         <Button color='error' onClick={deleteall}>Delete</Button>
                   </DialogActions>

                   
      </Dialog>

    </Box>           
            
)
}

export default Myorder;