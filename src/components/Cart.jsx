import React, { useEffect, useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux'

import { ad,del_ete } from '../store/selectSlice';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from 'react-router-dom';

import {Typography,Button,Box, CardHeader, CardMedia, CardActions,Grid,Card} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircularProgress from '@mui/material/CircularProgress';





const Cart = () => {

  const dispatch=useDispatch()
 
  const ele= useSelector((state)=>state.tok)

  const[content,setco]=useState([])
  
  const items= useSelector((state)=>state.selected)

  const[loader,setL]=useState(true)
 

  

 

  const navigate= useNavigate()
  

  useEffect(()=>{
 
      async function fetchcart()
      {

        try{
             
          const response = await fetch(`http://localhost:8000/api/v2/getuserspecificart?email=${ele[0].user.email}`)
                    
          const resp= await response.json()
          
          setco(resp.message[0].carts)
          setL(false)
    
        //catch block executes when there is a network error

        }catch(err)
        {
            console.log("Error occurred ",err)
        }

      }
      

      fetchcart();

  },[])

  if(loader)
    {
      return(
       
        <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',marginTop:'250px' }}>
               <CircularProgress color="success" />
        </Box>
        )

      
    }


      

  
  const deletee= async(id)=>{
        
        const response= await fetch(`http://localhost:8000/api/v2/deletecart?email=${ele[0].user.email}&id=${id}`,{

          method:'DELETE',

          headers:{
            "Content-Type":"application/json",
          }

        })

        const resp= await response.json()

       
        setco(resp.data[0].carts)
        

        

        toast.error(`item deleted`, {
          position: toast.TOP_CENTER
        });
        
  }

  const selec= (fod)=>{
      toast.success(`selected`, {
           position: toast.TOP_CENTER
         });
       dispatch(ad(fod))
  }

  const checkout=()=>{
    
    if(items.length===0)
    {
          toast.error(`You have not selected any item`, {
            position: toast.BOTTOM_RIGHT
          });
       
    }
    else{
         
      navigate('/check')
    }
    
  }

  

  function clear_selected()
  {
    if(items.length===0)
    {
      navigate('/student')
    }
    else{
      
      dispatch(del_ete())
      navigate('/student')
    }
  }

console.log(content)
  
  

  return (
    
        <Box sx={{width:'100%',minHeight:'100vh',overflow:'hidden',backgroundColor:'#e4fde1'}}>

                      <Box sx={{display:'flex',marginBottom:'25px', backgroundColor:'black',width:'100% ',position:'fixed',top:'0px',zIndex: 10,marginBottom:'10px'}}> 

                            
                              <IconButton aria-label="back" onClick={()=>clear_selected()}  style={{ color:'whitesmoke' }}>
                                <ArrowBackIcon />
                              </IconButton>
                            

                            

                            <Typography sx={{width:'100%',textAlign:'center',
                            fontWeight:'bold',
                            fontSize:'25px',
                            backgroundColor:'red',backgroundImage:'linear-gradient(45deg, #f3ec78, #af4261)',
                            backgroundRepeat:'repeat',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent', 
                            MozBackgroundClip: 'text',
                            MozTextFillColor: 'transparent',
                            animation:'scaleText 1s linear infinite',
                            '@keyframes scaleText':{

                              '0%': { transform: 'scale(1)' }, 

                              '50%': { transform: 'scale(0.5)' },

                              '100%': { transform: 'scale(1)' } 

                            }
                          }}>Food Cart</Typography>




                     </Box>

                            



                            

                          
                    

                    
                      {content.length===0?
                      <>
                      
                        {console.log("hello")}
                        
                        <Typography sx={{color:'black',display:'flex',justifyContent:'center',
                        alignItems:'center',
                        }}>Your Cart is Empty</Typography>

                      </>   
                      :
                         <>
                            
                            <Box sx={{ width:'100%',display: 'flex', justifyContent:'space-around',marginTop:'100px',flexWrap:'wrap',gap:'20px',
                              
                            }}>
                             
                             
                                 
                                 {content.map((fod,index)=>(
                                      
                                    

                                    
                                          <Card sx={{borderRadius:'35px',
                                           
                                            '&:hover': {
                                              
                                              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
                                            
                                            },
                                            width: { xs: '85%', sm: 'calc(50% - 20px)', md: 'calc(33.33% - 20px)' },
                                            
                                            }} key={index}>
                                             
                                              <CardHeader
                                               
                                               title={fod.title}
                                               sx={{backgroundColor:'#0e131f',color:'whitesmoke',textAlign:'center'}}
                                              />

                                              <CardMedia
                                                 
                                                 component="img"
                                                 height="194"
                                                 image={fod.image}
                   
                                                 alt=""
                                              
                                              />

                                              <CardActions sx={{dispaly:'flex',justifyContent:'space-between'}}>

                                                  
                                                       <Typography>&#8377;{fod.price}</Typography>


                                                       <Button size="small" 
                                                        onClick={()=>selec(fod) } sx={{
                                                        backgroundColor:'green',color:'white','&:hover': {backgroundColor: 'green', },fontWeight:'bold'
                                                        }}>Select</Button>



                                                       <IconButton
                                                                  size="small"
                                                                  onClick={() => deletee(fod._id)} 
                                                                  sx={{
                                                                    backgroundColor: 'red',
                                                                    color: 'white',
                                                                    '&:hover': { backgroundColor: 'red' },
                                                                    fontWeight: 'bold',
                                                                   
                                                                   
                                                                  }}
                                                                >
                                                                <DeleteIcon /> 
                                                      </IconButton>




                                              </CardActions>

                                              





                                          </Card>


                                    

                                                                  
                                 ))}




                           
                           
                          </Box>

                             <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center',width:'100%',
                             marginTop:'20px'
                                            }}>
                                      <Button variant="contained" onClick={checkout} sx={{borderRadius:'25px'}}  endIcon={<ArrowForwardIcon />}>Continue</Button>
                                      <Typography sx={{color:'black',marginLeft:'15px',marginTop:'10px',fontWeight:'bold'}}>Total items seected:{items.length}</Typography>
                              </Box>

                            
                         
                         
                         </>
                                  

                      }
                             
                    </Box>
                  
  )
}

export default Cart;