import {configureStore} from "@reduxjs/toolkit"
import useReducer from "../slices/userSlice"

const store = configureStore({
    reducer:{
        userInfo: useReducer
    }
})

export default store