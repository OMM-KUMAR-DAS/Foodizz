import React from 'react'
import { useState } from 'react';
import {  useSelector } from 'react-redux'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from 'react-router-dom';
import { Typography,Box,Button,Dialog,DialogActions,DialogContent,Slide,DialogTitle,IconButton,Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


import Lottie from 'lottie-react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Checkout = () => {
    const animationData = require('C:/Users/HP/Downloads/Animation - 1713724219018.json');
    const animationData_2 = require('C:/Users/HP/Downloads/Animation - 1713765287630.json');

    // const[details,setd]= useState({Phone:"",city:"",address:"",pin:""})

    const content= useSelector((state)=>state.selected)
    
    const ele= useSelector((state)=>state.tok)

    const[open,setopen]= useState(false)
    const[Open,setOpen]= useState(false)



    const navigate=useNavigate()

    let sum=0
    for(let i=0;i<content.length;i++)
    {
        sum+=content[i].price
    }

    

    
    function checking()
    {





      try{

        fetch(` http://localhost:8000/api/v1/getting_defaultaddfess?Email=${ele[0].user.email}`)
        .then(response=>response.json())
        .then(data=>{
              console.log(data.message)
              if( data.success==="true" && data.message===null)
                {
                  console.log("hello")
                  setopen(true)
                }
              else if(data.success==="false" && data.message==="Internal server error")  
                {
                     navigate('/internal_server')
                }  
                else{
                  setOpen(true)
                }
            

        })
      }

      catch(err)
      {
        console.log(err)
      }
                  

     

       
      

    }
   
    function goto_cart()
    {
        navigate('/cart')
    }

    function addaddress()
    {
      navigate('/saveaddress')
    }

    function gotopayment()
    {
      navigate('/paymethods')
    }

    function handleClose()
    {
      setopen(false)
    }

    function handleclose()
    {
      setOpen(false)
    }

  return (

    <Box sx={{width:'100%',minHeight:'100vh',backgroundColor:'#e4fde1'}}>
  


                 <Box sx={{width:'100%',
                              marginLeft:'auto',marginRight:'auto',
                              '@media (max-width: 700px)': {
                                width: '100%', // Adjust width for smaller screens
                              },
                                
                }} >

                      <Typography sx={{width:'100%',padding:'10px',marginLeft:'auto',marginRight:'auto',backgroundColor:'black',color:'whitesmoke',fontWeight:'bold',
                      marginBottom:'20px',
                      padding:'15px',
                      marginTop:'0px',
                      textAlign:'center',
                      zIndex:'5',
                      position:'sticky',
                      top:'0px'}}>Order Summary</Typography>

                      { 

                            <Paper 
                                elevation={3}
                                sx={{
                                  height: 400, 
                                  overflowY: 'auto',
                                  p: 2,
                                  width:'50%',
                                  marginLeft:'auto',
                                  marginRight:'auto',
                                  borderRadius:'30px',
                                  marginTop:'20px',
                                  '&::-webkit-scrollbar': {
                                    display: 'none',
                                  },
                                  '-ms-overflow-style': 'none',  // Internet Explorer 10+
                                  'scrollbar-width': 'none',  // Firefox
                                 
                                  '&:hover': {
                                    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
                                    
                                  },
                                  '@media (max-width: 600px)': {
                                    width: '85%', 
                                },

                                }}
                                
                            >
                                     

                                     {content.map((fod,index)=>(

                                      <Box key={index} sx={{display:'flex',justifyContent:'space-around',alignItems:'center',gap:'15px',marginBottom:'25px'}}>

                                          <img src={fod.image} alt=" "
                                            style={{width:'20%',borderRadius:'50%',
                                            }}/> 
                                            


                                            <Typography sx={{color:'black',fontSize:'20px',fontWeight:'bold',
                                              '@media (max-width:600px)':{
                                                  fontSize:'13px'
                                              }
                                            }}>{fod.title}</Typography> 
                                            <Typography sx={{color:'black',fontWeight:'bold'}}>&#8377;{fod.price}</Typography> 

                                      </Box>

                                     ))}



                                   
                            </Paper>
                      

      

                    }

                    <Typography sx={{fontWeight:'bold',backgroundColor:'#97d2fb',borderRadius:'25px',width:'20%',textAlign:'center',
                                    marginLeft:'auto',marginRight:'auto',marginTop:'25px',padding:"15px",

                                   '@media (max-width: 900px)': {
                                    width: '65%',
                                    padding:'5px'
                                    },

                                    '@media (min-width: 899px) && (max-width:1200px)': {
                                      width: '65%',
                                      padding:'5px'
                                      },

                                      // '@media (min-width: px)': {
                                      //   width: '65%',
                                      //   padding:'5px'
                                      //   },


                                }}>Total:&#8377;{sum}
                    </Typography>

                    <Box style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                
                               



<Lottie
                                    animationData={animationData}
                                    loop
                                    autoplay
                                    style={{ width: '200px',
                                    '@media (max-width: 450px)': {
                                      width: '100px', 
                                  },
                                     }}
                                    onClick={checking}
                                  />

<Lottie
                                    animationData={animationData_2}
                                    loop
                                    autoplay
                                    style={{ width: '150px',marginLeft:'40px',height:'150px' }}
                                    onClick={goto_cart}
                                  />
                                

                    </Box>

                  

                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      // onClose={handleClose}
                      sx={{ '& .MuiPaper-root': { borderRadius: 8,transition: 'transform 0.5s ease-in-out', 
                      '&:hover': {
                         boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
                         transform: 'scale(1.1)',  
                     },} }}
                    
                    >
                       
                        <DialogContent sx={{fontWeight:"bold"}}>
                          
                           Either you haven,t add any addresses or else you have not selected any address.Due to this you cannot proceed your order
                          
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Cancel</Button>
                          <Button onClick={addaddress}>Add/Select</Button>
                        </DialogActions>
                    </Dialog>

                     
                    <Dialog
                      open={Open}
                      TransitionComponent={Transition}
                      // onClose={handleClose}
                      sx={{ '& .MuiPaper-root': { borderRadius: 8,transition: 'transform 0.5s ease-in-out', 
                      '&:hover': {
                         boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
                         transform: 'scale(1.1)',  
                     },} }}
                    
                    >

                       <DialogTitle>

                                    <IconButton
                                              aria-label="close"
                                              onClick={handleclose}
                                              
                                      >
                                              <CloseIcon />
                                     </IconButton>
                       </DialogTitle>
                       
                        <DialogContent sx={{fontWeight:"bold"}}>
                          
                           Would you like to proceed you order with the address which you have selected or you want to modify.
                          
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={gotopayment}>Proceed</Button>
                          <Button onClick={addaddress}>Change</Button>
                        </DialogActions>
                    </Dialog>


                </Box> 


    </Box>
  ) 
}

export default Checkout