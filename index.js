const express=require("express")
const bodyParser = require('body-parser')

const mongoose = require("mongoose");

const cors = require('cors')

const app = express()

app.use(bodyParser.json())

app.use(cors())

require('dotenv').config()

const port=process.env.PORT||2000



//connecting to the database


mongoose.connect("mongodb+srv://ommdas310:J6w3mHGfVSl8zr1p@cluster0.orf3t12.mongodb.net/FOOD?retryWrites=true&w=majority")
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


  //import routes for todo api

  const client= require("./routes/user")
  const fo= require("./routes/addingfood")
  // const zo= require("./routes/check_out")


  //mount the routes

 app.use("/api/v1",client)
 app.use("/api/v2",fo)



app.listen(port,()=>{
    console.log(`server started at ${port} succesfully`)
})
