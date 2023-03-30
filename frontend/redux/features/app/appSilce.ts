import { createSlice, createAsyncThunk, createAction, PayloadAction } from "@reduxjs/toolkit"
import {ICategories, ICategoriesPaypload } from "../InterfaceReducer";
import appService from './appService'


const initState:ICategories = {
    status: '',
    categories: [],
}

export const getCategories:any = createAsyncThunk("app/get-categories",async(data,thunkAPI)=>{
    try{
        return await appService.apiGetCategories()
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const appSlice = createSlice({
    name:"app",
    initialState:initState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getCategories.fulfilled,(state:ICategories,action:PayloadAction<ICategoriesPaypload>)=>{
            state.status = action.payload.status;
            state.categories = action.payload.data;
            state.code = action.payload.code
        })
    },
})

export default appSlice.reducer;