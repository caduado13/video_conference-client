import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false
}

export const authorization = createSlice({
    name: "auth_user",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload
        }
    }
})

export const isAuthorization = authorization.actions
export const authorizationReducer = authorization.reducer