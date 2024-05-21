// import React from 'react'
// import { Box,Button, Typography } from '@mui/material'
// import { Link, useNavigate } from 'react-router-dom'
// import Lottie from 'lottie-react'
// import { useSelector } from 'react-redux';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import IconButton from '@mui/material/IconButton';
// const Myprofile = () => {


//   const animatedData= require('c:/Users/HP/Downloads/nEwAZ2G3B9.json')
//   const ele = useSelector((state) => state.tok);
//   const navigate= useNavigate()


//   function explore()
//   {
//     navigate('/student')
//   }



//   return (

//   <Box sx={{width:'100vw',minHeight:'100vh',backgroundColor:'#e4fde1'}}>




//            <Box sx={{ display: 'flex', backgroundColor: 'black', padding: '15px', width: '100%',alignItems:'center',   
//              }}>

//                 <IconButton aria-label="back"  style={{ color: 'whitesmoke' }} onClick={explore}>
//                     <ArrowBackIcon />
//                 </IconButton>

//                 <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '25px',textAlign:'center',flex:'1',

                                  
//                 }}>My Profile</Typography>

                             
               

//             </Box>
      
//      <Box sx={{width:'100vw',padding:'20px',display:'flex',justifyContent:'space-between',padding:'25px',alignItems:'center',         flexDirection:'row','@media (max-width: 900px)': {
//                                     flexDirection:'column',
//                                     padding:'10px'
//                                 },

//                                 transition: 'transform 0.5s ease-in-out', 
//                                 '&:hover': {
//                                    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
//                                    transform: 'scale(0.8)',  
//                                },

                            
//                                borderRadius:'25px'
//                                 }}>
    
//                                   <Box sx={{width:'40%',
//                                        '@media (max-width: 900px) and (min-width: 520px)': {
//                                         width:'70%'},
//                                         '@media (max-width: 519px) and (min-width: 0px)': {
//                                           width:'90%'},
//                                   }}>

//                                         <Lottie
//                                             animationData={animatedData}
//                                             loop
//                                             autoplay 
//                                         />

//                                   </Box>

//                                   <Box>


                                        

                                           
//                                             <Typography sx={{fontWeight:'bold',marginBottom:'180px','@media (max-width: 900px)': {
//                                                marginBottom:'100px'}}}>
//                                          {ele[0].user.name}</Typography>

                                       
                                          
                                      

                                            
//                                             <Typography sx={{fontWeight:'bold'}}>{ele[0].user.email}</Typography>

                                        

                                          
//                                   </Box>


//                                   <Box sx={{display:'flex',flexDirection:'column','@media (max-width: 900px)': {
//                                     flexDirection:'row',marginTop:'80px'}}}>

//                                           <Link to='/saveaddress'><Button sx={{marginBottom:'155px',color:'black',fontWeight:'bold',borderRadius:'25px','@media (max-width: 900px)': {
//                                               marginBottom:'0px',
//                                               marginRight:'15px'
//                                           },
//                                               transition: 'transform 0.3s ease-in-out', 
//                                             '&:hover': {
//                                                 boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
//                                                 transform: 'scale(1.05)',  
//                                             },

//                                             animation:'scaleText 2s linear infinite',

//                                             '@keyframes scaleText':{
              
//                                             '0%': { transform: 'scale(1.1)' }, 
              
//                                             '50%': { transform: 'scale(0.99)' },
              
//                                             '100%': { transform: 'scale(1.1)' } 
              
//                                           },

//                                             }} variant='outlined'>Saved Address</Button></Link>
                                          
//                                           <Link to='/order'><Button sx={{borderRadius:'25px',color:'black',fontWeight:'bold',

//                                             transition: 'transform 0.3s ease-in-out', 
//                                             '&:hover': {
//                                                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
//                                                transform: 'scale(1.05)',  
//                                            },
//                                            animation:'scaleText 2s linear infinite',

//                                             '@keyframes scaleText':{
              
//                                             '0%': { transform: 'scale(1.1)' }, 
              
//                                             '50%': { transform: 'scale(0.9)' },
              
//                                             '100%': { transform: 'scale(1.1)' } 
              
//                                           },
//                                           }} variant='outlined'>My orders</Button></Link>
                                          
//                                   </Box>


                                       

//      </Box>
                                  

   

//   </Box>

//   )
// }

// export default Myprofile