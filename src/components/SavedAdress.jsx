import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Box, Typography,Dialog,DialogTitle,DialogContent,TextField,Button,DialogActions,Card, CardContent,CardActions,CircularProgress,Radio,FormControlLabel,Slide} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Lottie from 'lottie-react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const SavedAdress = () => {

    const ele = useSelector((state) => state.tok);

    const[addres,setA]= useState()

     const[open,setOpen]= useState(false)

     const [Open,setopen]= useState(false)

     const[Name,setN]= useState('')

     const[Address,seta]= useState('')

     const[pincode,setP]= useState('')

     const[Phonenumber,setPh]= useState('')

     const[add_id,setId]= useState('')


    const[loading,setL]= useState(true)


    const[selectedValue,setS]= useState(null)





    const navigate= useNavigate()

    const animatedData= require('c:/Users/HP/Downloads/Animation - 1715859473686.json')







    useEffect(()=>{


            function fetchingaddress()
            {
                        try{

                            fetch(`http://localhost:8000/api/v1/useraddress?Email=${ele[0].user.email}`)

                            .then(response=>response.json())

                            .then(data=>{
                                
                                setA(data)
                                setL(false)
                            } 

                            )
                    
                        }catch(err)
                        {
                            console.log(err)
                        }
                        
            }

            function fetchingselectedaddress()
            {
                try{

                    // http://localhost:8000/api/v1/getting_defaultaddfess?Email=dhirendra211@gmail.com

                    fetch(` http://localhost:8000/api/v1/getting_defaultaddfess?Email=${ele[0].user.email}`)
                     .then(response=>response.json())
                     .then(data=>{
                        console.log(data)

                        if(data.message!=null)
                            {
                               setS(data.message.addresses[0]._id)
                            }

                        // setS(data.message.addresses[0]._id)
                     })

                }catch(err)
                {
                    console.log(err)
                }
            }

            
            fetchingaddress() 
            fetchingselectedaddress()   
      

    },[])


   


    function gotohome()
    {
        navigate('/student')
    }

//for adding address
    function handleClickopen()
    {
        setOpen(true);
    }

    
    function handleClose()
    {
        setOpen(false);
        
        
    }
    
    //for updating address

    function handleclose()
    { 
        setId('')
        setopen(false)
    }




    //deleting address

    function delete_address(id)

    

        {
              console.log(id)

              try{


                fetch(`http://localhost:8000/api/v1/delete_specificaddress?Email=${ele[0].user.email}&addressid=${id}`,{

                     method:'DELETE',
      
                })
                 
                .then(response=>response.json())
                .then(data=>{

                    if(data.success==="false" && data.message==="Internal server error")
                        {
                            console.log("Internal server error")
                        }
                        else{
                           
                            
                            toast.success(`Address Deleted successfully`, {
                                position: toast.BOTTOM_RIGHT
                              });

                            setA(data.message)

                        }
                })



              }catch(err)
              {
                console.log(err)
              }
        }


        function editaddress(items)
        {

            setN(items.Name)
            seta(items.Address)
            setP(items.pincode)
            setPh(items.Phonenumber)
            setId(items._id)
            setopen(true)
            
        }

        if(loading)
            {
                return (

                <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',marginTop:'250px' }}>
                     <CircularProgress color="success" />
                </Box>)
            }


     function handleChange(event)
     {
         console.log(event.target.value)

         try{

                fetch("http://localhost:8000/api/v1/setting_defaultaddress",{

                        method:"POST",

                        headers:{

                            "Content-Type":"application/json"

                        },

                        body:JSON.stringify({

                            Email:ele[0].user.email,
                            addressid:event.target.value

                            })
    
                })

                .then(response=>response.json())
                .then(data=>{
                    console.log(data)
                    setS(event.target.value)
                })
            
         }catch(err)
         {
            console.log(err)
         }
        
     }      


  return (



    <Box sx={{backgroundColor:'#c1cad6',minHeight: '100vh', width: '100vw'}}>

            <Box sx={{ display: 'flex', backgroundColor: 'black', padding: '15px', width: '100%',alignItems:'center',
                position:'sticky',
                top:'0px',
                zIndex:'4'
                
             }}>

                <IconButton aria-label="back" onClick={gotohome} style={{ color: 'whitesmoke' }}>
                    <ArrowBackIcon />
                </IconButton>

                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '25px',textAlign:'center',flex:'1',

                                  
                }}>Saved Address</Typography>

                             
               

            </Box>

       
       
       
       
       {

             
               addres===undefined || addres.length===0 ?

             <Typography sx={{

                width:'100%',textAlign:'center',
                            fontWeight:'bold',
                            fontSize:'25px',
                            backgroundColor:'red',backgroundImage:'linear-gradient(45deg, , #d2ff96)',
                            backgroundRepeat:'repeat',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent', 
                            MozBackgroundClip: 'text',
                            MozTextFillColor: 'transparent',
                            marginTop:'200px',
                            animation:'scaleText 1s linear infinite',
                            '@keyframes scaleText':{

                              '0%': { transform: 'scale(1)' }, 

                              '50%': { transform: 'scale(0.7)' },

                              '100%': { transform: 'scale(1)' } 

                            }

             }}>No Address Available</Typography>:

        <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent:'space-around',
                            marginTop:'50px',
                            weight:'100%',
                            '@media (max-width: 1250px)': {
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap:'25px',
                                
                              },
                            


                        }}
        >
            

                 {addres.map((item) => (

                   

                         <Card sx={{ width: "450px",
                         maxWidth: '90%',borderRadius:'25px',bgcolor: "#ebf8b8",
                              transition: 'transform 0.3s ease-in-out', 
                             '&:hover': {
                                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
                                transform: 'scale(1.05)',  
                            },
                         }}>

                             <CardContent>


                             <FormControlLabel

                                value={item._id}
                                control={<Radio />}
                                label=""
                                checked={selectedValue === item._id}
                                onChange={handleChange}
                                />



                                 <Typography sx={{fontWeight:'bold',marginBottom:'5px'}}>

                                     {item.Name}

                                 </Typography>

                                 <Typography sx={{fontWeight:'bold',marginBottom:'5px'}} >

                                     {item.Address}

                                 </Typography>

                                 <Typography sx={{fontWeight:'bold',marginBottom:'5px'}}>

                                    {item.pincode}
                                 </Typography>

                                 <Typography sx={{fontWeight:'bold',marginBottom:'5px'}}>
                                    {item.Phonenumber}
                                 </Typography>

                             </CardContent>

                             <CardActions sx={{display:"flex",justifyContent:'space-between'}}>

                                        <Button size="small"  sx={{fontWeight:'bold'}} onClick={()=>editaddress(item)}>Edit</Button>

                                        <Button size="small"  color="error" sx={{fontWeight:'bold'}} onClick={()=>delete_address(item._id)}>Delete</Button>
                                        
                             </CardActions>

                         </Card>


                 ))}
                 
            
         </Box>
                
        }
                        <Box sx={{width:'10%',marginLeft:'auto',marginRight:'auto',
                                  '@media (max-width: 600px)': {
                                    width: '25%', 
                                },
                        }}>


                                       <Lottie
                                            animationData={animatedData}
                                            loop
                                            autoplay
                                            onClick={handleClickopen}
                                        />

                                        

                                          <Dialog
                                                open={open}
                                                onClose={handleClose}
                                                TransitionComponent={Transition}
                                                PaperProps={{
                                                component: 'form',
                                                onSubmit: (event) => {
                                                    event.preventDefault();
                                                    const formData = new FormData(event.currentTarget);
                                                    const formJson = Object.fromEntries(formData.entries());

                                                

                                                    if(/^\d{10}$/.test(formJson.phone))

                                                    {

                                                            try
                                                            {

                                                            fetch("http://localhost:8000/api/v1/addingAddress",{

                                                                method:"POST",

                                                                headers:{

                                                                    "Content-Type":"application/json"

                                                                },

                                                                body:JSON.stringify({

                                                                Email:ele[0].user.email,
                                                                name:formJson.nam,
                                                                phonenumber:formJson.phone,
                                                                Pincode:formJson.Pin,
                                                                address:formJson.address 

                                                                })
                                                            })

                                                            .then(response=>response.json())

                                                            .then(data=>{
                                                                   
                                                                if(data.success==="false" && data.message==="Internal server error" )
                                                                    {
                                                                        
                                                                        navigate('/internal_server')
                                                                    }
                                                                   
                                                                else if(data.success==="false" && data.message==="Cannot add more") 
                                                                    {
                                                                        toast.error(`Can,t add more than 3 Address`, {
                                                                            position: toast.BOTTOM_RIGHT
                                                                          });
                                                                    }   
                                                                else{

                                                                    // console.log(data.dat)
                                                                    toast.success(`Address added suucessfully`, {
                                                                        position: toast.BOTTOM_RIGHT
                                                                      });
                                                                    setA(data.dat)
                                                                } 
                                                                handleClose();   
                                                            })

                                                            } 

                                                            catch(err)
                                                            {
                                                                console.log(err)
                                                            }
                                                    }
                                                    else{
                                                        
                                                        toast.error(`Phone length should be 10`, {
                                                            position: toast.BOTTOM_RIGHT
                                                          });
                                                    }

                                                   
                                                   
                                                },
                                            }}
                                        >

                                        <DialogTitle sx={{textAlign:'center'}}>Fill the details</DialogTitle>

                                        <DialogContent>


                                        <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="n"
                                                name="nam"
                                                label="Name"
                                                type="string"
                                                fullWidth
                                                variant="standard"
                                        />

                                        <TextField

                                                autoFocus
                                                required
                                                margin="dense"
                                                id="p"
                                                name="phone"
                                                label="Number"
                                                type="number"
                                                fullWidth
                                                variant="standard"
                                        />

                                        <TextField

                                                autoFocus
                                                required
                                                margin="dense"
                                                id="pi"
                                                name="Pin"
                                                label="Pincode"
                                                type="number"
                                                fullWidth
                                                variant="standard"
                                        />

                                        <TextField

                                                autoFocus
                                                required
                                                margin="dense"
                                                multiline
                                                rows={4}
                                                id="add"
                                                name="address"
                                                label="Address"
                                                fullWidth
                                                variant="standard"
                                        />




                                        </DialogContent>


                                        <DialogActions>
                                                        <Button onClick={handleClose}>Cancel</Button>
                                                        <Button type="submit">Add</Button>
                                        </DialogActions>

                                </Dialog>  


                                <Dialog
                                    open={Open}
                                    onClose={handleclose}
                                    TransitionComponent={Transition}
                                    PaperProps={{
                                    component: 'form',
                                    onSubmit: (event) => {
                                        event.preventDefault();
                                        const formData = new FormData(event.currentTarget);
                                        const formJson = Object.fromEntries(formData.entries());
                                        console.log(formJson)
                                        console.log("hello")

                                        if(/^\d{10}$/.test(formJson.phone))
                                            {
                                                

                                                try{
                                                    

                                                    fetch("http://localhost:8000/api/v1/update_address",{

                                                    method:"PUT",

                                                    headers:{

                                                        "Content-Type":"application/json"

                                                    },


                                                    body:JSON.stringify({

                                                            Email:ele[0].user.email,
                                                            address_id:add_id,
                                                            name:formJson.nam,
                                                            phonenumber:formJson.phone,
                                                            Pincode:formJson.Pin,
                                                            address:formJson.address 

                                                        })
                                                    })
                                                    .then(response=>response.json())
                                                    .then(data=>{console.log(data)
                                                           
                                                           if(data.success==="false" && data.message==="Same Address No changes made")
                                                            {
                                                                toast.error(`${data.message}`, {
                                                                    position: toast.BOTTOM_RIGHT
                                                                  });
                                                                  
                                                            }

                                                            else if(data.success==="false" && data.message==="pincode should be 6 digit")
                                                                {
                                                                    toast.error(`${data.message}`, {
                                                                        position: toast.BOTTOM_RIGHT
                                                                      });
                                                                }

                                                            else if(data.success==="false" && data.message==="Internal server error")  
                                                                {
                                                                    toast.error(`${data.message}`, {
                                                                        position: toast.BOTTOM_RIGHT
                                                                      });
                                                                      handleclose()
                                                                } 
                                                            else{
                                                                setA(data.dat.addresses)
                                                                toast.success(`${data.message}`, {
                                                                    position: toast.BOTTOM_RIGHT
                                                                  });
                                                                handleclose()
                                                            } 
                                                            
                                                          
                                                    })

                                                     



                                                }catch(err)
                                                {
                                                        console.log(err)
                                                }

                                               
                                            }
                                        else{
                                            toast.error(`Phone length should be 10`, {
                                                position: toast.BOTTOM_RIGHT
                                              });
                                        }    
                                        
                                    }  
                                    }}                 
                                    >

                                   

                                    <DialogContent>

                                   


                                    <TextField
                                            autoFocus
                                            required
                                            margin="dense"
                                            id="n"
                                            name="nam"
                                            label="Name"
                                            type="string"
                                            value={Name}
                                            onChange={(e)=>setN(e.target.value)}
                                            fullWidth
                                            variant="standard"
                                    />

                                    <TextField

                                            autoFocus
                                            required
                                            margin="dense"
                                            id="p"
                                            name="phone"
                                            label="Number"
                                            type="number"
                                            value={Phonenumber}
                                            onChange={(e)=>setPh(e.target.value)}
                                            fullWidth
                                            variant="standard"
                                    />

                                    <TextField

                                            autoFocus
                                            required
                                            margin="dense"
                                            id="pi"
                                            name="Pin"
                                            label="Pincode"
                                            type="number"
                                            value={pincode}
                                            onChange={(e)=>setP(e.target.value)}
                                            fullWidth
                                            variant="standard"
                                    />

                                    <TextField

                                            autoFocus
                                            required
                                            margin="dense"
                                            multiline
                                            rows={4}
                                            id="add"
                                            name="address"
                                            label="Address"
                                            value={Address}
                                            onChange={(e)=>seta(e.target.value)}
                                            fullWidth
                                            variant="standard"
                                    />




                                    </DialogContent>


                                    <DialogActions>

                                                    <Button onClick={handleclose}>Cancel</Button>
                                                    <Button type="submit">Update</Button>

                                    </DialogActions>

                                </Dialog> 

                        </Box>


                       


                           

                

                             
    </Box>


    
        
    

   

  )
}

export default SavedAdress