import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Form from 'react-bootstrap/Form';
import {Box,Grid,TextField,Button} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import GroupIcon from '@mui/icons-material/Group';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Signup = () => {
    
    const navigate=useNavigate()
    const[details,setd]=useState({name:"",email:"",password:"",role:""})

    const [showPassword, setShowPassword] = useState(false);
    
    function handleuser(event)
    {
      setd((prev)=> (
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

      const passwordlength=6;
      const regex = new RegExp(`^.{${passwordlength},}$`);

      if(regex.test(details.password))
      {

                        fetch("http://localhost:8000/api/v1/signupp",{

                        method:"POST",

                        headers:{
                          "Content-Type":"application/json"
                        },

                      body:JSON.stringify({
                        name:details.name,
                        email:details.email,
                        password:details.password,
                        role:details.role
                      })
                  })

                  .then(response=>response.json())

                    .then(data=>{
    
                        if(data.success)
                        {
                            toast.success("Account created successfully", {
                            position: toast.TOP_CENTER
                          });
                            navigate('/Login')
                        }
                        else{
                          toast.success("user already existed click the link below to login", {
                            position: toast.TOP_CENTER
                          });
                        }
              
                  });

      }
      else{

        toast.error("Password length is less than 6", {
          position: toast.TOP_CENTER
        });
      }
      
      
 
  
 }

  return (
    <div className='fo'>
         

              <form onSubmit={checking} >

                     
                     

                      <Box sx={{display:'flex',width:'40%',marginLeft:'auto',marginRight:'auto',padding:'20px',marginTop:'5px',borderRadius:'10%',
                       boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.9)',position:'relative',top:'100px',
                      '@media (max-width: 800px)': {  
                        width: '80%',
                        top:'50px'
                      },
                      backgroundColor:'#e1eff6'}}>

                      

                    <Grid container spacing={1} >  
                        
                    <img src="https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png" alt=" " style={{marginLeft:'auto',marginRight:'auto',borderRadius:'50%',width:'70px',height:'70px'}}></img>

                      
                         <Grid item xs={12}>

                              <TextField
                              
                              required
                              fullWidth
                              margin="dense"
                              InputLabelProps={{ style: { color: 'black',fontFamily:'cursive' } }}
                              type="String"
                              label="Username"
                              name="name"
                              value={details.name}
                              onChange={handleuser}
                              placeholder='Enter your name'
                              variant="outlined"
                              InputProps={{
                                startAdornment: (
                                  <AccountCircleIcon
                                    sx={{
                                      marginRight: '5px', 
                                      color: 'black', 
                                    }}
                                  />
                                ),
                                style: {
                                  color: 'black',
                                },
                              }}

                              
                              />

                          </Grid>

                      <br></br>

                      <Grid item xs={12}>

                            
                            <TextField
                                required
                                fullWidth
                                margin="dense"
                                InputLabelProps={{ style: { color: 'black',fontFamily:'cursive' } }}
                                type="String"
                                label="Email"
                                name="email"
                                value={details.email}
                                onChange={handleuser}
                                placeholder='Enter your email'
                                variant="outlined"
                                InputProps={{
                                  startAdornment: (
                                    <EmailIcon
                                      sx={{
                                        marginRight: '5px', 
                                        color: 'black', 
                                      }}
                                    />
                                  ),
                                  style: {
                                    color: 'black',
                                  },
                                }}
                               

                            />

                              

                      </Grid>
                  
                  <br></br>
                  <br></br>

                 <Grid item xs={12}>

                       
                        
                        
               <TextField
                      id="outlined-password-input"
                      label="Password"
                      required
                      margin="dense"
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
                      placeholder='Enter your password'
                      variant="outlined"
                     />
                

                 </Grid>


                 <br></br>


                 <Grid item xs={12}>



                              <TextField
                              required
                              fullWidth
                              margin='dense'
                              type="String"
                              label="Role"
                              name="role"
                              value={details.role}
                              onChange={handleuser}
                              InputLabelProps={{ style: { color: 'black',fontFamily:'cursive' } }}
                              placeholder='Enter your name'
                              variant="outlined"
                              InputProps={{
                                startAdornment: (
                                  <GroupIcon
                                    sx={{
                                      marginRight: '8px',
                                      color: 'black', 
                                    }}
                                  />
                                ),
                                style: {
                                  color: 'black',
                                },
                              }}

                              
                              
                            />

                          
                          
                 </Grid>

                 <br></br>
                 <br></br>
                 <br></br>

                 <Grid item container   justifyContent="center">
                     
                 <Button variant="contained"  sx={{ width: '50%',borderRadius:'25px',backgroundColor:'#475b5a' }} type='submit'>Signup</Button>
                      

                 </Grid>

                  <br></br>


                 

                  <Grid  item container   justifyContent="center" >
                      <Link to='/Login'><p style={{color:'red'}}>Already an user</p></Link>
                  </Grid> 

                 
               </Grid>
               </Box>     
               </form>
      
           
    </div>
  )
}

export default Signup