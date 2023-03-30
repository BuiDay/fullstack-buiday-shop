import { createSlice, createAsyncThunk, createAction, PayloadAction, Reducer, AsyncThunkAction } from "@reduxjs/toolkit"
import {IProducts} from "../InterfaceReducer";
import authService from "./productsService";


const initState:IProducts = {
    isLoading:false,
    isSuccess:false,
    products:[],
}

export const getAllProducts:any = createAsyncThunk("products/get-all",async(data:any,thunkAPI)  =>{
    try{
        return await authService.getProducts()
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})


export const authSlice = createSlice({
    name:"auth",
    initialState:initState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getAllProducts.fulfilled,(state:any,action:any)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload.data
        })
    },
})


export default authSlice.reducer;