import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: true
}

export const showAreaState = createSlice({
    name: "show_area",
    initialState,
    reducers:{
        setShow:(state, action) =>{
            state.show = action.payload
    }} 
})

export const {setShow} = showAreaState.actions
export const showAreaReducer = showAreaState.reducer