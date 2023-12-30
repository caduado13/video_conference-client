import { configureStore } from "@reduxjs/toolkit";
import {authorizationReducer} from "./authState"

export const store = configureStore({
    reducer: {
        isAuth: authorizationReducer
    }
})