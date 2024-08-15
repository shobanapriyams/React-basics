import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fruits: []
}

const fruitSlice = createSlice ({
    name: "fruits",
    initialState,
    reducers: {
        setFruit: (state,action) => {
            state.fruits = [...state.fruits, action.payload]
        }
    }
})

export const {setFruit} = fruitSlice.actions

export default fruitSlice.reducer