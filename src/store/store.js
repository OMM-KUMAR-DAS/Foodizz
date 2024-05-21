import { configureStore } from "@reduxjs/toolkit";

import tokenReducer from "./tokenSlice";



import selectReducer from "./selectSlice"


const store= configureStore({
    
    reducer:{
        
        tok:tokenReducer,
        selected:selectReducer,
        
       
    },
})


export default store;


