import { createSlice } from "@reduxjs/toolkit"; 

const appslice=createSlice({
    name:"appslice",
    initialState:{
        open:true,
        video:[],
        category:"All",
        searchsuggestion:[],
    },
    reducers:{
        togglesidebar:(state)=>{
            state.open=!state.open;
        },
        sethomevideo:(state,action)=>{
            state.video=action.payload;
        },
        setcategoy:(state,action)=>{
            state.category=action.payload;
        },
        setsearchsuggestion:(state,action)=>{
            state.searchsuggestion=action.payload;
        }
    }
})
export const {togglesidebar,sethomevideo,setsearchsuggestion,setcategoy}=appslice.actions;
export default appslice.reducer;