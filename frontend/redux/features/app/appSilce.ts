import { createSlice, createAsyncThunk, createAction, PayloadAction } from "@reduxjs/toolkit"
import {IApp, ICategoriesPaypload, IColor } from "../InterfaceReducer";
import appService from './appService'


const initState:IApp = {
    categories: [],
    colors:[]
}

export const getCategories:any = createAsyncThunk("app/get-categories",async(data,thunkAPI)=>{
    try{
        return await appService.apiGetCategories()
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const getColors:any = createAsyncThunk("app/get-colors",async(data,thunkAPI)=>{
    try{
        return await appService.apiGetColors()
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
        .addCase(getCategories.fulfilled,(state:IApp,action:PayloadAction<ICategoriesPaypload>)=>{
            state.categories = action.payload.data;
        })
        .addCase(getColors.fulfilled,(state:IApp,action:PayloadAction<ICategoriesPaypload>)=>{
            state.colors = action.payload.data;
        })
    },
})

export default appSlice.reducer;