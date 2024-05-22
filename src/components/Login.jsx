import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { add } from '../store/tokenSlice';
import { useDispatch } from 'react-redux';
// import Form from 'react-bootstrap/Form';

import { Box,Grid,TextField,Button, Dialog, DialogContent,DialogActions, DialogTitle, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';


import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';






const Login = () => {
  
    const navigate= useNavigate();
    
    //for login
    const[details,setd]= useState({email:"",password:""})

    //for resetting password
    const[forget_details,setf]= useState({email:"",newpass:"",confirmpass:""})

    const [showPassword, setShowPassword] = useState(false);

    const[Open,seto]= useState(false)

    
  
    
    const dispatch= useDispatch()

    // const ele= useSelector((state)=>state.tok)

    const[iswrong,setw]= useState(false)
    // const[iswrong_text]= useState('')

    const[isemail_wrong,setE]= useState(false)

    function handleuser(event)
    {
      setd((prev)=>(
      {
         ...prev,[event.target.name]:event.target.value
      }))
    }

    function handleopen()
    {
      seto(true)
    }

    function handleClose()
    {
      seto(false)
      setw(false)
      setE(false)
    }

    function handleSubmit(event)
    {
      event.preventDefault()
      event.stopPropagation();

      if(forget_details.newpass===forget_details.confirmpass)
      {


        fetch("http://localhost:8000/api/v1/forgetpassword",{

          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({
            email:forget_details.email,
            confirm_password:forget_details.confirmpass
          })
        })
        .then(response=>response.json())
        .then(data=>{
            try{

              if(data.success==='true')
              {
                  console.log(`${data.message}`)
                  setw(false)
                  seto(false)
                  setE(false)
                  forget_details.email=""
                  forget_details.newpass=""
                  forget_details.confirmpass=""
                  toast.success("Password updated successfully", {
                    position: toast.TOP_CENTER
                  });
                  
              }
              else if(data.success==='false' && data.message==='email does not exist'){
                
                setE(true)
                setw(false)
              }
              else{
                setw(false)
                setE(false)
                seto(false)
                toast.error("error updating the password", {
                  position: toast.TOP_CENTER
                });
              }

            }catch(err)
            { 

              console.error('An error occurred:', err);
              toast.error('An error occurred. Please try again later.',{
                position:toast.TOP_CENTER
              });

            }
        })

       
        
      }
      else{
        console.log("ya")
        setE(false)
        setw(true)
      }
    }

    function handle_form(event)
    {

      setf((prev)=>(
        {
           ...prev,[event.target.name]:event.target.value
        }))
    }



    const handleTogglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    function checking(event)
    {

      event.preventDefault()
      
      fetch("http://localhost:8000/api/v1/log",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

      body:JSON.stringify({
         email:details.email,
         password:details.password,
      })
  })

  .then(response=>response.json())

  .then(data=>{
    
            if(data.success)
            {
                console.log(data)
                dispatch(add(data))
                // console.log(data)
                navigate('/auth')
            }
            else if(!data.success && data.message==="user is not registered"){
              toast.error(`${data.message} sign up first`, {
                position: toast.TOP_CENTER
              });
            }
            else if(data.message==='password incorect'){
             
              toast.error(`${data.message}`, {
                position: toast.TOP_CENTER
              });
            }
  
  });
  
    
}




  return (
    
    <div className='for'>
      
          <form onSubmit={checking}>

          



          <Box sx={{display:'flex',width:'35%',marginLeft:'auto',marginRight:'auto', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.9)',padding:'30px',position:'relative',top:'150px',borderRadius:'10%',
          '@media (max-width: 800px)': {  
            width: '90%',
            top:'100px'
          },
          
          backgroundColor:'#e1eff6'
          
        }}>


          <Grid container spacing={1} >


          <img src="https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png" alt=" " style={{marginLeft:'auto',marginRight:'auto',borderRadius:'50%',width:'70px',height:'70px'}}></img>

         
                  <Grid item xs={12}>
                      
                           <TextField
                              
                              required
                              fullWidth
                              margin="dense"
                              type="String"
                              label="Email"
                              name="email"
                              value={details.email}
                              onChange={handleuser}
                              placeholder='Enter email'
                              variant="outlined"
                              InputLabelProps={{ style: { color: 'black',fontFamily:'cursive' } }}
                              InputProps={{
                                sx: {
                                  color:'black',
                                },
                                startAdornment:(
                                    <EmailIcon
                                        sx={{
                                          marginRight:'4px',
                                          color:'black'
                                        }}
                                      
                                    />           
                                )
                                
                              }}
                              
                              />

                  </Grid>  
                
                

                           
              

               <Grid item xs={12}>


               <TextField
                      id="outlined-password-input"
                      label="Password"
                      required
                      margin='dense'
                      fullWidth
                      InputLabelProps={{ style: { color: 'black',fontFamily:'cursive' } }}
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={details.password}
                      onChange={handleuser}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleTogglePasswordVisibility}
                              edge="end"
                              
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                        startAdornment:(
                          <LockIcon
                          sx={{
                            marginRight: '4px',
                            color: 'black',
                          }}
                        />
                        )
                      }}
                      placeholder='Enter password'
                      variant="outlined"
                     />
                 
                </Grid>
                
                 


               

                           

                <br></br>
                <br></br>
                <br></br>

                <Grid item container justifyContent="center">

                    <Button variant="contained"  sx={{ width: '50%',borderRadius:'25px',
                    backgroundColor:'greenyellow',
                    color:'black',
                    fontWeight:'bold' }} type='submit'>Login</Button>
                    
                </Grid>

                

                 <br></br>
                 <br></br>

                 <Grid item container justifyContent="center">

                    <p>Have an account ?</p>
                    <Link to="/sign" > <p style={{color:'red'}}>Signup</p></Link>

                 </Grid>

               
                 
                     <Button varient="contained" onClick={handleopen}  sx={{color:'black',width:'50%',marginLeft:'auto',marginRight:'auto'}}>Forget Password</Button>

                     <Dialog open={Open}  sx={{width:'50%',height:'70%',marginLeft:'auto',marginRight:'auto',marginTop:'100px',
                     
                    
                     '@media (min-width: 0px) and (max-width:400px)': { // Adjust the max-width as needed
                      width: '100%',
                      height: '85%',
                      marginTop:'10px',
                      padding:'0'
                     },

                     '@media (min-width: 400px) and (max-width:800px)': { // Adjust the max-width as needed
                      width: '100%',
                      height: '80%',
                      marginTop:'50px',
                      padding:'0'
                     },
                     '@media (min-width: 800px) and (max-width:1200px)': { // Adjust the max-width as needed
                      width: '65%',
                      height: '85%',
                      marginTop:'90px',
                      padding:'0'
                     },
                    
                    
                     }}
                     > 
                         
                         <DialogTitle  sx={{backgroundColor:'black',color:'whitesmoke'}}>
                          Reset Password
                         </DialogTitle>

                         <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                              position: 'absolute',
                              right: 8,
                              top: 8,
                              color:'white'
                            }}
                          >
                             <CloseIcon />
                          </IconButton>
                         
                         <DialogContent   sx={{marginTop:'10px'}}  >

                         <form onSubmit ={handleSubmit} style={{width:'100%',padding:'25px'}}>
                                
                              

                                      <TextField 

                                         autoFocus
                                         id="email"
                                         margin='dense'
                                         name="email"
                                         label="Email Address"
                                         type="email"
                                         fullWidth
                                         required
                                         value={forget_details.email}
                                         onChange={handle_form}
                                         />
                                         {isemail_wrong && <Typography varient="body2" color="error">email does not exist</Typography> }


                                      <TextField 
                                         
                                         id="newpassword"
                                         margin='dense'
                                         name="newpass"
                                         label="New Password"
                                         autoComplete="new-password"
                                         type="password"
                                         fullWidth
                                         required
                                         value={forget_details.newpass}
                                         onChange={handle_form}/>

                                      <TextField
                                      
                                       id="confirmpassword"
                                       margin="dense"
                                       name="confirmpass"
                                       autoComplete="new-password"
                                       label="Confirm Password"
                                       type="password"
                                       fullWidth
                                       required 
                                       value={forget_details.confirmpass}
                                       onChange={handle_form}
                                       
                                      /> 
                                      {iswrong && <Typography varient="body2" color="error">Password do not match</Typography>} 

                              

                                
                                    
                                  <DialogActions sx={{marginTop:'2px',width:'100%'}}>
                                                
                                    <Button type="submit" variant="outlined"  sx={{width:'50%',borderRadius:'25px',marginLeft:'auto',marginRight:'auto',
                                    '@media (max-width: 800px)': { // Adjust the max-width as needed
                                      width: '75%',
                                     
                                  },}}>
                                      Update
                                    </Button>
                                  </DialogActions>

                                
                            
                         </form>
                      </DialogContent>


                      


                         


                     </Dialog>
                  
                     
               

          </Grid>
        </Box>
        
      </form>
          
          
    </div>
  )
}

export default Login