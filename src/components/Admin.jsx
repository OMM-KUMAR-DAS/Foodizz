
import React from 'react'
import { useState } from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { Box,Dialog,DialogTitle,DialogContent,TextField,Button,DialogActions,Slide,FormControl,InputLabel,Select,MenuItem} from '@mui/material';
import Lottie from 'lottie-react';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const Admin = () => {
  

  const[open,setopen]= useState(false)
  const[choice,setchoice]= useState()
  const animatedData= require('c:/Users/HP/Downloads/Animation - 1716373491110.json')
  const navigate= useNavigate()



  console.log("hello")
  
//   })

//   }

  function handleclose()
  {
    setopen(false)
    setchoice()
  }

  function handleopen()
  {
    setopen(true)
  }

  function handleChoiceChange(event)
  {
    setchoice(event.target.value)
  }

  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',minHeight:'100vh',
        backgroundImage:'url(https://png.pngtree.com/background/20210711/original/pngtree-cartoon-gourmet-food-hamburger-yellow-banner-picture-image_1092229.jpg)',
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
        
        
    }}>
        
                
                        
                                        <Lottie
                                            animationData={animatedData}
                                            loop
                                            autoplay
                                            onClick={handleopen}
                                            style={{display:'flex',justifyContent:'center',alignItems:'center',width:'150px',}}
                                        />


               






                 <Dialog
                                                open={open}
                                                onClose={handleclose}
                                                sx={{ '& .MuiPaper-root': { borderRadius: 8,transition: 'transform 0.5s ease-in-out', 
                                                 backgroundColor:'#ddfff7',
                                                '&:hover': {
                                                   boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
                                                   transform: 'scale(1.1)',  
                                               },} }}
                                                TransitionComponent={Transition}
                                                PaperProps={{
                                                component: 'form',
                                                
                                                onSubmit: (event) => {
                                                    event.preventDefault();
                                                    const formData = new FormData(event.currentTarget);
                                                    const formJson = Object.fromEntries(formData.entries());
                                                    console.log(formJson)
                                                    console.log(choice)

                                                    try{

                                                        fetch('http://localhost:8000/api/v2/addfood',{

                                                            method:"POST",
                                                           
                                                            headers:{
                                                              "Content-Type":"application/json",
                                                            },
                                                              
                                                              body:JSON.stringify({
                                                                
                                                                image:formJson.image,
                                                                title:formJson.title,
                                                                des:formJson.des,
                                                                category:formJson.category,
                                                                choice:choice,
                                                                price:formJson.price
                                                        
                                                              }),

                                                        })
                                                        .then(response=>response.json())
                                                        .then(data=>{
                                                            console.log(data)
                                                            if(data.success==="false")
                                                                {
                                                                    toast.dark(`Not able to add food due to some error`, {
                                                                        position: toast.BOTTOM_RIGHT
                                                                      });
                                                                      navigate('/internal_server')
                                                                }

                                                            else{
                                                                toast.success(`Food added succesfully`, {
                                                                    position: toast.BOTTOM_RIGHT
                                                                  });
                                                                  setopen(false)
                                                            }    
                                                        })      

                                                    }catch(err)
                                                    {
                                                        console.log(err)
                                                    }

                                                }}}

                                                   
                                        >

                                        <DialogTitle sx={{textAlign:'center'}}>Add Food</DialogTitle>

                                        <DialogContent>


                                        <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="n"
                                                name="image"
                                                label="Image Link"
                                                type="string"
                                                fullWidth
                                                variant="standard"
                                                onChange={(e)=>e.target.value}
                                        />

                                        <TextField

                                                autoFocus
                                                required
                                                margin="dense"
                                                id="p"
                                                name="title"
                                                label="Food Name"
                                                type="string"
                                                fullWidth
                                                variant="standard"
                                                onChange={(e)=>e.target.value}
                                        />

                                        <TextField

                                                autoFocus
                                                required
                                                margin="dense"
                                                id="pin"
                                                name="price"
                                                label="Food Price"
                                                type="number"
                                                fullWidth
                                                variant="standard"
                                                onChange={(e)=>e.target.value}
                                        />

                                        <TextField

                                                autoFocus
                                                required
                                                margin="dense"
                                                id="pii"
                                                name="category"
                                                label="Food Category"
                                                type="string"
                                                fullWidth
                                                variant="standard"
                                                onChange={(e)=>e.target.value}
                                        />

                                        {/* <TextField

                                                autoFocus
                                                required
                                                margin="dense"
                                                id="pi"
                                                name="choice"
                                                label="Veg/Nonveg"
                                                type="string"
                                                fullWidth
                                                variant="standard"
                                                onChange={(e)=>e.target.value}
                                        /> */}
                                        <FormControl fullWidth margin="dense" variant="standard">
                                                <InputLabel id="choice-label">Veg/Nonveg</InputLabel>
                                                        <Select
                                                            labelId="choice-label"
                                                            id="choice"
                                                            name="choice"
                                                            value={choice}
                                                            onChange={handleChoiceChange}
                                                            label="Veg/nonveg"
                                                            >
                                                                <MenuItem value="veg">veg</MenuItem>
                                                                <MenuItem value="nonveg">nonveg</MenuItem>
                                                        </Select>
                                        </FormControl>




                                        <TextField

                                                autoFocus
                                                required
                                                margin="dense"
                                                multiline
                                                rows={4}
                                                id="add"
                                                name="des"
                                                label="Food Description"
                                                fullWidth
                                                variant="standard"
                                                onChange={(e)=>e.target.value}
                                        />




                                        </DialogContent>


                                        <DialogActions>
                                                        <Button onClick={handleclose}>Cancel</Button>
                                                        <Button type="submit">Add</Button>
                                        </DialogActions>

                                </Dialog>  
                 
                


        
    </Box>
  )
}


export default Admin