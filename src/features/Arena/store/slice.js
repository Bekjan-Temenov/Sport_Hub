import { createSlice } from "@reduxjs/toolkit";
import { arena } from "./action";

const arenaSlice = createSlice({
    name:"arena",
    initialState:{
        arena:[],
        error:null,
        status:"idle" 
    },
    resucers:{},
    extraReducers :(builder) => {
        builder
        .addCase(arena.pending , (state) => {
            state.status = "Loading"
        } )
        .addCase(arena.fulfilled , (state,action) => {
            state.status = "success",
            state.arena = action.payload
        })
        .addCase(arena.rejected , (state , action) => {
            state.status = "error",
            state.error = action.payload;
        })
    }
})
export default arenaSlice.reducer