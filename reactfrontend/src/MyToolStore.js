import {configureStore} from "@reduxjs/toolkit"
import CounterSlice from "./toolkitslice/CounterSlice"

export const store=configureStore({
    reducer:{
        counter:CounterSlice
    }
})