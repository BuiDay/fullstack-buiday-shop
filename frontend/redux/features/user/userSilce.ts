import { createSlice, createAsyncThunk, createAction, PayloadAction, Reducer, AsyncThunkAction } from "@reduxjs/toolkit"
import authService from "./userService";
import { IAuthRegister, ICart, IUser } from '../InterfaceReducer'
import userService from "./userService";
import { HYDRATE } from "next-redux-wrapper";
import { array } from "yup";

const initState:IUser = {
    currentData:{
        status:"",
        data:{},
    },
    wishlist:[],
    carts:{
        ProductsCarts:[],
        productsTotal:0,     
    },
}

// export const getUser:any = createAsyncThunk("user/get-user",async(data:IAuthRegister,thunkAPI)  =>{
//     try{
//         return await authService.getUser()
//     }catch(err){
//        return thunkAPI.rejectWithValue(err)
//     }
// })

// export const addCart:any = createAsyncThunk("user/add-cart",async(data:ICart,thunkAPI)  =>{
//     try{
//         return data
//     }catch(err){
//        return thunkAPI.rejectWithValue(err)
//     }
// })

export const authSlice = createSlice({
    name:"user",
    initialState:initState,
    reducers:{
        getAddCard:(state, action)=> {
            let count = state.carts.productsTotal || 0
            let cart = {
                id: action.payload.id,
                color:action.payload.color || "",
                count:action.payload.count,
            }
            let arr = [...state.carts.ProductsCarts]
            arr.push(cart)
            state.carts = {
                ProductsCarts: arr,
                productsTotal: count + 1
            }
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(HYDRATE, (state, action: any) => {
            return {
                ...state,
                ...action.payload.products,
            }
          });
       
    }
})

export const {getAddCard} = authSlice.actions;

export default authSlice.reducer;