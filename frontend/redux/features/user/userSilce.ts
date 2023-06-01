import { createSlice, createAsyncThunk, createAction, PayloadAction, Reducer, AsyncThunkAction } from "@reduxjs/toolkit"
import authService from "./userService";
import { IAuthRegister, ICart, IUser } from '../InterfaceReducer'
import userService from "./userService";

const initState:IUser = {
    currentData:{
        status:"",
        data:{},
    },
    wishlist:[],
    carts:[],
}

export const getUser:any = createAsyncThunk("user/get-user",async(data:IAuthRegister,thunkAPI)  =>{
    try{
        return await authService.getUser()
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const addCart:any = createAsyncThunk("user/add-cart",async(data:ICart,thunkAPI)  =>{
    try{
        return data
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const authSlice = createSlice({
    name:"user",
    initialState:initState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getUser.rejected,(state:any,action:PayloadAction<any>)=>{
            state.currentData.data = {} ;
            state.currentData.code = action.payload.code
            state.wishlist = []
        })

        .addCase(getUser.fulfilled,(state:any,action:PayloadAction<any>)=>{
            state.currentData.data = action.payload.data     ;
            state.wishlist = action.payload.data.wishlist
        })

        .addCase(addCart.fulfilled,(state:IUser,action:PayloadAction<any>)=>{
            let tempArray = [...state.carts || [], action.payload]
            state.carts=tempArray;
        })
    },
})


export default authSlice.reducer;