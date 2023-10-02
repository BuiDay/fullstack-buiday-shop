import { createSlice, createAsyncThunk, createAction, PayloadAction, Reducer, AsyncThunkAction } from "@reduxjs/toolkit"
import authService from "./userService";
import { IAuthRegister, ICart, IUser } from '../InterfaceReducer'
import userService from "./userService";
import { HYDRATE } from "next-redux-wrapper";
import { array, number } from "yup";

const initState:IUser = {
    currentData:{
        status:"",
        data:{},
    },
    wishlist:[],
    carts:{
        products:[],
        productsTotal:0,
        cartTotal:0
    },
}

export const getUser:any = createAsyncThunk("user/get-user",async(data:IAuthRegister,thunkAPI)  =>{
    try{
        return await authService.getUser()
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})



export const authSlice = createSlice({
    name:"user",
    initialState:initState,
    reducers:{
        getAddCard:(state, action)=> {
            let count = state.carts.productsTotal || 0
            let cartTotal = 0;
            let cart = {
                id: action.payload.id,
                color:action.payload.color || "",
                count:action.payload.count,
                price:action.payload.price,
            }
            let arr = [...state.carts.products]
            arr.push(cart)
          
            arr.forEach(item=>{
                cartTotal = cartTotal + item.price * item.count
            })
            state.carts = {
                products: arr,
                productsTotal: count + 1,
                cartTotal: cartTotal
            }
        },
        deleteCart:(state, action)=> {
            const productId = action.payload.id;
            let count = state.carts.productsTotal || 0
            let carts = [...state.carts.products];
            let cartTotal = 0;

            carts = carts.filter((item)=>{
                return item.id !== productId
            });

            carts.forEach(item=>{
                cartTotal = cartTotal + item.price * item.count
            })

            state.carts = {
                products: carts,
                productsTotal: count - 1,
                cartTotal: cartTotal
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action: any) => {
                return {
                    ...state,
                    ...action.payload.products,
            }})
            .addCase(getUser.fulfilled, (state:any, action: any)=>{
                 state.currentData = action.payload
            })
            .addCase(getUser.rejected, (state:any, action: any)=>{
                state.currentData.status = action.payload.data.status,
                state.currentData.data = undefined
           })
    }
})

export const {getAddCard,deleteCart} = authSlice.actions;

export default authSlice.reducer;