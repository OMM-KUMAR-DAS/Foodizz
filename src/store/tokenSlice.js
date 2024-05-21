import { createSlice } from '@reduxjs/toolkit';


const initialState=[]

const tokenSlice= createSlice({
    name: 'tok',

    initialState,

    reducers: {

        
        add(state,action) {
            state.push(action.payload);
        }

      
    }
})

export const {add} = tokenSlice.actions
export default tokenSlice.reducer