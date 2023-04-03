import { createSlice, createAsyncThunk, createAction, PayloadAction, Reducer, AsyncThunkAction } from "@reduxjs/toolkit"
import {IProducts} from "../InterfaceReducer";
import authService from "./productsService";


const initState:IProducts = {
    isLoading:false,
    isSuccess:false,
    products:[],
    product:{}
}

export const getAllProducts:any = createAsyncThunk("products/get-all",async(data:any,thunkAPI)  =>{
    console.log(data)
    try{
        return await authService.getProducts(data)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const getProductById:any = createAsyncThunk("products/get-product",async(data:any,thunkAPI)  =>{
    try{
        return await authService.getProductById(data)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})


export const authSlice = createSlice({
    name:"products",
    initialState:initState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getAllProducts.pending,(state:any,action:any)=>{
            state.isLoading = true;
            state.products = []
        })
        .addCase(getAllProducts.fulfilled,(state:any,action:any)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload.data
        })
        .addCase(getProductById.fulfilled,(state:any,action:any)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.product = action.payload.data
        })
    },
})


export default authSlice.reducer;