import React from 'react'
import { Typography,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'



const Welcome = () => {

    const navigate=useNavigate()

  function gotologin()
  {
       navigate('/login')
  }

  function gotosignup()
  {
    navigate('/sign')
  }

  return (
    <div style={{ 
        backgroundImage: 'url("https://img.freepik.com/free-vector/restaurant-mural-wallpaper-concept_23-2148671390.jpg?w=996&t=st=1714129622~exp=1714130222~hmac=17675b31d8d1e95215f0b1459fb95fd82e31bb4a6fa91d77786313b144618603")',
        width:'100vw',
        height:'100vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      
       
    
       

        
    }}>
        <Typography  sx={{
        fontWeight:'bold',fontSize:'45px',
        width:'100%',textAlign:'center'
        }}>Welcome to Foodizz</Typography>


       <div style={{ display: 'flex', justifyContent: 'center' }}>




             
            <Button 
                variant="contained"
                onClick={()=>{gotologin()}}
                
                sx={{
                    width: '20%',
                    position: 'relative',
                    top: '250px',
                    borderRadius:'25px',
                    border:'2px solid black',
                    color:'whitesmoke',
                    padding:'20px',
                    animation: 'scale 2s infinite', // Apply inline animation
                '@keyframes scale': { // Define keyframes inline
                    '0%': {
                        transform: 'scale(0.7)',
                    },
                    '50%': {
                        transform: 'scale(1)', // Scale up
                    },
                    '100%': {
                        transform: 'scale(0.7)',
                    },
                },
                '@media (max-width: 650px)': { 
                    width:'40%'
                  },
                }}
            >
               Login
            </Button>


            <Button 
                variant="contained"
                onClick={()=>{gotosignup()}}
                
                sx={{
                    width: '20%',
                    position: 'relative',
                    top: '250px',
                    padding:'20px',
                    border:'2px solid black',
                    borderRadius:'25px',
                    color:'whitesmoke',
                    animation: 'scale 2s infinite', // Apply inline animation
                '@keyframes scale': { // Define keyframes inline
                    '0%': {
                        transform: 'scale(0.7)',
                    },
                    '50%': {
                        transform: 'scale(1)', // Scale up
                    },
                    '100%': {
                        transform: 'scale(0.7)',
                    },
                },
                '@media (max-width: 650px)': { 
                    width:'40%'
                  },
                }}
            >
               Signup
            </Button>
        </div>
     
       


    </div>
  )
}

export default Welcome