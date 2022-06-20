import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email : ''
}

export const newsletterSlicer = createSlice({
    name : 'newsletter',
    initialState,
    reducers:{
        setemail:(state,action)=>{
            state.email = action.payload
        }
    }
})

export const {setemail} = newsletterSlicer.actions

export default newsletterSlicer.reducer