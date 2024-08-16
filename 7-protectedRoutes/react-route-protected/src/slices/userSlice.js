import {createSlice} from "@reduxjs/toolkit"
import { defer } from "react-router-dom"

const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser:(state,action)=>{
            state.user = action.payload
        },

        removeUser:(state,action)=>{
            state.user = null
        }
    }
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer