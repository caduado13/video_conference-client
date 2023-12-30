import { configureStore } from "@reduxjs/toolkit";
import {authorizationReducer} from "./authState"
import { showAreaReducer } from "./showServer";

export const store = configureStore({
    reducer: {
        isAuth: authorizationReducer,
        isShow: showAreaReducer
    }
})