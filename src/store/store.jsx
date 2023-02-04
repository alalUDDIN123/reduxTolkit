import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import { userSlice } from "./slices/UserSlice";



export const store=configureStore({
    reducer:{
        counter:counterSlice,
        users:userSlice.reducer
    }
})