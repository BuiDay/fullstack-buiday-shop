import { createSlice, createAsyncThunk, createAction, PayloadAction, Reducer, AsyncThunkAction } from "@reduxjs/toolkit"
import authService from "./userService";
import { IAuthRegister, IUser } from '../InterfaceReducer'

const initState:IUser = {
    currentData:{},
}

export const getUser:any = createAsyncThunk("user/get-user",async(data:IAuthRegister,thunkAPI)  =>{
    try{
        return await authService.getUser()
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

        .addCase(getUser.fulfilled,(state:any,action:PayloadAction<any>)=>{
            state.currentData = action.payload ;
        })
    },
})


export default authSlice.reducer;