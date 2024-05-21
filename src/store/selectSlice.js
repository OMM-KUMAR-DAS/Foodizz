import { createSlice } from '@reduxjs/toolkit';


const initialState=[];

const selectSlice= createSlice({
    name: 'selected',

    initialState,
        
    

    reducers: {

       ad(state,action){
        state.push(action.payload)
       },
       del_ete(state){
            state.splice(0,state.length)
       }
     }
     
 })

export const {ad,del_ete} = selectSlice.actions
export default selectSlice.reducer





