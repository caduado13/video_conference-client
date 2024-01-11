import { createSlice } from "@reduxjs/toolkit";

export interface UserType  {
    id: string,
    user: string
}

const initialState:UserType = {
    id: "",
    user: ""
}

export const userState = createSlice({
    name: "user_state", 
    initialState, 
    reducers: {
        setUserName: (state, action) => {
            state.user = action.payload
        },
        setUserId: (state, action) => {
            state.id = action.payload
        },
    }
})

export const {setUserName, setUserId} = userState.actions
export const userStateReducers = userState.reducer