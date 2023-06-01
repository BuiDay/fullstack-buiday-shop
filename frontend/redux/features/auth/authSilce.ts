import { createSlice, createAsyncThunk, createAction, PayloadAction, Reducer, AsyncThunkAction } from "@reduxjs/toolkit"
import { IAuth, IAuthPayload} from "../InterfaceReducer";
import authService from "./authService";
import { IAuthRegister,IAuthLogin } from '../InterfaceReducer'
import { useAppSelector } from "@/redux/hook";

const initState:IAuth = {
    isLoggedIn : false,
    token:"",
    isError:false,
    isLoading:false,
    isSuccess:false,
    status:""
}

export const login:any = createAsyncThunk("auth/login",async(data:IAuthLogin,thunkAPI)  =>{
    try{
        return await authService.apiLogin(data)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const logout:any = createAsyncThunk("auth/logout",async(data,thunkAPI)  =>{
    try{
        return 1
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

        .addCase(login.pending,(state:IAuth)=>{
            state.isLoading = true;
        })
        .addCase(login.rejected,(state:IAuth,action:PayloadAction<any>)=>{
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.isLoggedIn = false;
            state.status = action.payload.data.status;
            state.token = undefined;
        })
        .addCase(login.fulfilled,(state:IAuth,action:PayloadAction<IAuthPayload>)=>{
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.status = action.payload.status ;
            state.token = action.payload.data?.token
        })
      
        .addCase(logout.fulfilled,(state:IAuth)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isLoggedIn = false;
            state.status = ""
            state.token = undefined;
        })
    },
})

export default authSlice.reducer;