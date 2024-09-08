import { createSlice } from "@reduxjs/toolkit"; 

const appslice=createSlice({
    name:"appslice",
    initialState:{
        open:true,
    },
    reducers:{
        togglesidebar:(state)=>{
            state.open=!state.open;
        }
    }
})
export const {togglesidebar}=appslice.actions;
export default appslice.reducer;