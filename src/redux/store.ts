import { configureStore } from "@reduxjs/toolkit";
import {authorizationReducer} from "./authState"
import { showAreaReducer } from "./showServer";
import { userStateReducers } from "./users";

export const store = configureStore({
    reducer: {
        isAuth: authorizationReducer,   
        isShow: showAreaReducer,
        userState: userStateReducers
    }
})