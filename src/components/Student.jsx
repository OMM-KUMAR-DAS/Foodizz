
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Typography,
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Button,
  CardHeader,
  CardActions,
  Card,
  CardMedia,
  CardContent,
  Menu,
  MenuItem,
  Box
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import Lottie from "lottie-react";
import { deletetoken } from "../store/tokenSlice";


const Student = () => {
  const [fod, setf] = useState([""]);
  const [car, setc] = useState("");

  const [bol, setb] = useState(true);
  const [load, setl] = useState(false);

  const navigate=useNavigate()

  const ele = useSelector((state) => state.tok);
  


  const animationData = require('c:/Users/HP/Downloads/Animation - 1716322537574.json')

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const dispatch= useDispatch()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  


 

  useEffect(() => {


    console.log(ele[0])
    if(ele[0].token==='')
      {
        navigate('/login')
        toast.error(`Successfully logout`, {
          position: toast.TOP_CENTER,
        });

        return
      }
    


    function getfoods() {

      try{
            fetch("http://localhost:8000/api/v2/getal")
             .then(response=>response.json())
             .then(data=>{
              console.log(data)
              if(data.success==="false")
                {
                  navigate('/internal_server')
                }
                else{
                    
                    setf(data.message);
                    setl((prev) => !prev);
                }
             })

      }catch(err)
      {
             console.log(err)
      }
      
     

    }

    async function getcart() {
      const response = await fetch(
        `http://localhost:8000/api/v2/getuserspecificart?email=${ele[0].user.email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const dat = await response.json();
      console.log(dat.message[0].carts)
      
      if(!dat.success && dat.message==="Internal server error") 

        {
          toast.error(`Internal server error`, {
            position: toast.TOP_CENTER,
          });
        }

        else{
          setc(dat.message[0].carts)
        }

    }

    getfoods();
    getcart();
    // console.log(ele[0].token)
  

  }, [ele]);



  const adding = (fod) => {

    for (let i = 0; i < car.length; i++) {
      if (fod._id === car[i]._id) {
        console.log("hello");
        return toast.success(`item already added`, {
          position: toast.TOP_CENTER
        });
      }
    }

    toast.success(`item added`, {
      position: toast.TOP_CENTER
    });

    fetch("http://localhost:8000/api/v2/getcar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: ele[0].user.email,
        id: fod._id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setc([...car, data.message.carts]);
      });
  };

  const food = async (event) => {
    if (bol === true) {
      setb((prev) => !prev);
      
    }
    try {
      const response = await fetch(
        `http://localhost:8000/api/v2/getby?category=${event.target.value}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const dat = await response.json();
      setf(dat.message);
    } catch (err) {
      console.log(err);
    }
  };

  const foods = async (event) => {
    if (bol === false) {
      setb((prev) => !prev);
    }
    try {
      const response = await fetch(`http://localhost:8000/api/v2/getal`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const dat = await response.json();
      setf(dat.message);
    } catch (err) {
      console.log(err);
    }
  };

  const foo = async (event) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v2/getchoice?choice=${event.target.value}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const dat = await response.json();
      setf(dat.message);
    } catch (err) {
      console.log(err);
    }
  };

  function gotoaddress()
  {
    navigate('/saveaddress')
  }

  function gotoorderhistory()
  {
    navigate('/order')
  }

  function goup()
  {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll animation
    });
  }

  function logout()
  {
      dispatch(deletetoken()) 
  }

  return (
    <Box sx={{width:'100%',minHeight:'100vh'}}>

      <AppBar position="sticky" sx={{width:'100%',margin: '0', padding: '0',backgroundColor:'black'}}>

        <Toolbar>
        <Box sx={{display:'flex',alignItems:'center',marginRight:'auto'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
                
                <MenuIcon />

          </IconButton>  
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
           
            <MenuItem onClick={gotoaddress}>
              <LocationOnIcon sx={{ mr: 1 }} />
              Saved Address
            </MenuItem>

            <MenuItem onClick={gotoorderhistory}>
              <HistoryIcon sx={{ mr: 1 }} />
              Order history
            </MenuItem>

            <MenuItem onClick={logout}>
             
             <LogoutIcon sx={{ mr: 1 }} />
             Logout
            </MenuItem>  
           
          </Menu>    



          <Typography variant="h6" sx={{width:'50%',marginLeft:'auto',marginRight:'auto'}}>
            Foddizz
          </Typography>
        </Box>


          <Link to="/cart">
            <IconButton sx={{color:'whitesmoke',marginRight:'10px'}}>
              <Badge badgeContent={car.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>

        

        
        </Toolbar>
      </AppBar>

      <br></br>

     
      



      <Typography sx={{width:'25%',marginLeft:'auto',marginRight:'auto',
      fontWeight:'bold',backgroundColor:'#92d5e6',
      color:'whitesmoke',
      textAlign:'center',borderRadius:'25px',padding:'15px',
      animation: 'scaleText 2s linear infinite',
        '@keyframes scaleText': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        
        '@media (max-width: 1200px)': {
          width:'45%',
          padding:'8px'
        },
      }}

      id="our_menu"
      >
        Our Menu
      </Typography>

      <br></br>

      <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap',gap:'15px'}}>


        <Button
          onClick={foods}
          sx={{
            backgroundColor: "lemonchiffon",
            fontWeight: "bold",
            color: "black",
            borderRadius:'25px',
            transition: 'transform 0.4s ease-in-out',
            '&:hover': {
              transform: 'scale(1.2)', // Scale up on hover
              backgroundColor:'lemonchiffon',
           
           },
           
          }}
        >
          All
        </Button>


        <Button
          onClick={food}
          value="chicken"
          sx={{
            backgroundColor: "lemonchiffon",
            fontWeight: "bold",
            color: "black",
            borderRadius:'25px',
            transition: 'transform 0.4s ease-in-out', // Smooth transition on transform
            '&:hover': {
             transform: 'scale(1.2)', // Scale up on hover
             backgroundColor:'lemonchiffon',
          
        },
            
          }}
        >
          Chicken
        </Button>



        <Button
          onClick={food}
          value="panner"
          sx={{
            backgroundColor: "lemonchiffon",
            fontWeight: "bold",
            color: "black",
            borderRadius:'25px',
            transition: 'transform 0.4s ease-in-out',
            '&:hover': {
              transform: 'scale(1.2)', // Scale up on hover
              backgroundColor:'lemonchiffon',
           
         },
          }}
        >
          Panner
        </Button>



        <Button
          onClick={food}
          value="pizza"
          sx={{
            backgroundColor: "lemonchiffon",
            fontWeight:'bold',
            color: "black",
            borderRadius:'25px',
            transition: 'transform 0.4s ease-in-out',
            '&:hover': {
              transform: 'scale(1.2)', // Scale up on hover
              backgroundColor:'lemonchiffon',
           
         },
          }}
        >
          Pizza
        </Button>


        <Button
          onClick={food}
          value="burger"
          sx={{
            backgroundColor: "lemonchiffon",
            fontWeight:'bold',
            color: "black",
            borderRadius:'25px',
            transition: 'transform 0.4s ease-in-out',
            '&:hover': {
              transform: 'scale(1.2)', // Scale up on hover
              backgroundColor:'lemonchiffon',
           
         },
          }}
        >
          Burger
        </Button>


        <Button
          onClick={food}
          value="Sandwhich"
          sx={{
            backgroundColor: "lemonchiffon",
            fontWeight: "bold",
            color: "black",
            borderRadius:'25px',
            transition: 'transform 0.4s ease-in-out',
            '&:hover': {
              transform: 'scale(1.2)', // Scale up on hover
              backgroundColor:'lemonchiffon',
           
         },
            
          }}
        >
          Sandwhich
        </Button>


      </Box>

      <br></br>
      <br></br>

      {bol && (

        <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>


          <Button
            onClick={foo}
            value="veg"
            sx={{ backgroundColor: "lightgreen", color: "white",borderRadius:'25px',width:'10%',color:'black',fontWeight:'bold',
            '@media (max-width: 800px)': {
             width:'25%'
              
            },
             }}
          >
            Veg
          </Button>

          <Button
            onClick={foo}
            value="nonveg"
            sx={{
              backgroundColor: "red",
              marginLeft: "25px",
              color: "white",
              borderRadius:'25px',
              width:'10%',
              color:'black',
              fontWeight:'bold',
              '@media (max-width: 800px)': {
                 width:'25%'                
              },
            }}
          >
            Nonveg
          </Button>

        </Box>

      )}

      <br></br>

      {load ? (
        <>

           <Box sx={{width:'100px',marginLeft:'auto',marginRight:'auto'}}>

                                            <Lottie
                                                    animationData={animationData}
                                                    loop
                                                    autoplay
                                                    style={{width:'80px',position:'fixed',top:'300px',
                                                    zIndex:'5',
                                                  }}
                                                  onClick={goup}
                                                  
                                                />
          </Box> 

          <Box
            
            sx={{width:'100%',display: 'flex', justifyContent:'space-around',marginTop:'50px',flexWrap:'wrap',gap:'20px',}}
          > 
                                    
                                       
          
            {  fod.map((fod) => (

             
                <Card sx={{  width: { xs: '80%', sm: 'calc(50% - 20px)', md: 'calc(30% - 20px)' },bgcolor: "lightgray",borderRadius:'25px',
                    transition: 'transform 0.3s ease-in-out', 
                    '&:hover': {
                        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
                        transform: 'scale(1.05)',  
                    }, 
                 }}>

                  <CardHeader
                    title={fod.title}
                    sx={{ backgroundColor: "black", color: "white" }}
                  />

                  <CardMedia
                    component="img"
                    height="194"
                    image={fod.image}
                   
                    alt=" "
                  />

                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {fod.des}
                    </Typography>
                  </CardContent>

                  <CardActions
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>&#8377;{fod.price}</Typography>

                    <br></br>
                    <Button
                      onClick={() => adding(fod)}
                      variant="contained"
                      color="success"
                      startIcon={<ShoppingCartIcon/>}
                      sx={{borderRadius:'25px'}}
                    >
                      Add food
                    </Button>
                    


                  </CardActions>

                </Card>
             
            ))}

          </Box>

        </>
      ) : (
        

        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            
            <img src="https://media.tenor.com/dRD766D-eCMAAAAi/jagyasini-singh-foodbyjag.gif" alt=""
            style={{width:'15%'}}></img>

        </div>  
      )}

      
    </Box>
  );
};

export default Student;
