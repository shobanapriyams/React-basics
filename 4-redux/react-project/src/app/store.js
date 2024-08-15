import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../slices/userSlice"
import fruitReducer from "../slices/fruitSlice"

const store = configureStore({
    reducer: {
        usersInfo: userReducer,
        fruitsInfo: fruitReducer
    }
})

export default store