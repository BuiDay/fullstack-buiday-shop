import { createSlice, createAsyncThunk, createAction, PayloadAction, Reducer, AsyncThunkAction } from "@reduxjs/toolkit"
import {IProducts} from "../InterfaceReducer";
import authService from "./productsService";


const initState:IProducts = {
    isLoading:false,
    isSuccess:false,
    products:{},
    mobile:{},
    tablet:{},
    laptop:{},
    product:{},
    watch:{}
}

export const getAllProducts:any = createAsyncThunk("products/get-all",async(data:any,thunkAPI)  =>{
    try{
        return await authService.getProducts(data)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const getMobileProducts:any = createAsyncThunk("products/mobile",async(data:any,thunkAPI)  =>{
    try{
        return await authService.getMobileProducts(data)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const getTabletProducts:any = createAsyncThunk("products/tablet",async(data:any,thunkAPI)  =>{
    try{
        return await authService.getTabletProducts(data)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const getLaptopProducts:any = createAsyncThunk("products/laptop",async(data:any,thunkAPI)  =>{
    try{
        return await authService.getLaptopProducts(data)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const getWatchProducts:any = createAsyncThunk("products/watch",async(data:any,thunkAPI)  =>{
    try{
        return await authService.getWatchProducts(data)
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
            state.products = {}
        })
        .addCase(getAllProducts.fulfilled,(state:any,action:any)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload
        })

        .addCase(getMobileProducts.pending,(state:any,action:any)=>{
            state.isLoading = true;
            state.mobile = {}
        })
        .addCase(getMobileProducts.fulfilled,(state:any,action:any)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.mobile = action.payload
        })

        .addCase(getTabletProducts.pending,(state:any,action:any)=>{
            state.isLoading = true;
            state.tablet = {}
        })
        .addCase(getTabletProducts.fulfilled,(state:any,action:any)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.tablet = action.payload
        })

        .addCase(getLaptopProducts.pending,(state:any,action:any)=>{
            state.isLoading = true;
            state.laptop = {}
        })
        .addCase(getLaptopProducts.fulfilled,(state:any,action:any)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.laptop = action.payload
        })

        .addCase(getWatchProducts.pending,(state:any,action:any)=>{
            state.isLoading = true;
            state.watch = {}
        })
        .addCase(getWatchProducts.fulfilled,(state:any,action:any)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.watch = action.payload
        })


        .addCase(getProductById.pending,(state:any,action:any)=>{
            state.isLoading = true;
            state.product = {}
        })

        .addCase(getProductById.fulfilled,(state:any,action:any)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.product = action.payload.data
        })
    },
})


export default authSlice.reducer;