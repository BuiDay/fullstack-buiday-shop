import { createSlice} from "@reduxjs/toolkit"
import {ILoading} from "../InterfaceReducer";
import { HYDRATE } from "next-redux-wrapper";

const initState:ILoading = {
    isLoading:false,
}

export const loadingSlice = createSlice({
    name:"loading",
    initialState:initState,
    reducers:{
        setLoading:(state, action)=> {
          state.isLoading = action.payload;
          },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
          return {
            ...state,
            ...action.payload.isLoading
          };
        },
       
    }
})
export default loadingSlice.reducer;

export const {setLoading} = loadingSlice.actions;
