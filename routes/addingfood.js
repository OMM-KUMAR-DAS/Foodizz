const express=require("express")
const router=express.Router()

const{addfoods} = require("../controllers/addfood")

const{getbycate} = require("../controllers/getbycategory")

const{getall} = require("../controllers/getallfood")

const{getbychoice} = require("../controllers/veg_non")

const{getcart} = require("../controllers/specificusercart")

const{getcartofoneuser} = require("../controllers/getspecicart")

const{deletecarts} = require("../controllers/deletecart")

const{order_list} = require("../controllers/Order")

const{delete_order,delete_allorder}= require("../controllers/deleteorder")

const{all_orders}= require("../controllers/allorder")


//route for adding food
router.post("/addfood",addfoods)

//route for getting food by category

router.get("/getby",getbycate)

//route for getting all foods details

router.get("/getal",getall)

//route for getting food by choice

router.get("/getchoice",getbychoice)

router.post("/getcar",getcart)

router.get("/getuserspecificart",getcartofoneuser)

router.delete('/deletecart',deletecarts)

router.post('/order',order_list)

router.delete('/deleteorder',delete_order)

router.delete('/deleteall',delete_allorder)

router.get('/allorder',all_orders)



module.exports=router;