import { createSlice, createAsyncThunk, createAction, PayloadAction } from "@reduxjs/toolkit"
import { IApp, ICategoriesPaypload, IColor } from "../InterfaceReducer";
import appService from './appService'
import { HYDRATE } from "next-redux-wrapper";


const initState: IApp = {
    categories: [],
    colors: [],
    compare_products: {},
    isLoading: false

}

// export const getCategories:any = createAsyncThunk("app/get-categories",async(data,thunkAPI)=>{
//     try{
//         return await appService.apiGetCategories()
//     }catch(err){
//        return thunkAPI.rejectWithValue(err)
//     }
// })

// export const getColors:any = createAsyncThunk("app/get-colors",async(data,thunkAPI)=>{
//     try{
//         return await appService.apiGetColors()
//     }catch(err){
//        return thunkAPI.rejectWithValue(err)
//     }
// })

// export const apiCompareProducts:any = createAsyncThunk("app/compare_products",async(data:string,thunkAPI)=>{
//     try{
//         return data
//     }catch(err){
//        return thunkAPI.rejectWithValue(err)
//     }
// })


export const appSlice = createSlice({
    name: "app",
    initialState: initState,
    reducers: {
        getCategories: (state, action) => {
            state.categories = action.payload.data;
        },
        getColors: (state, action) => {
            state.colors = action.payload.data;
        },
        getCompareProducts: (state, action) => {
            let array: string[] = [...state?.compare_products?.id || []];
            if (array.includes(action.payload)) {
                array = array.filter(function (item) {
                    return item !== action.payload
                })
            } else {
                array.push(action.payload)
            }
            state.compare_products={
                id:array,
                total:array.length
            }
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.products,
            };
        },

    }
})
export const { getCategories, getColors, getCompareProducts } = appSlice.actions;

export default appSlice.reducer;


// extraReducers:(builder) =>{
//     builder
//     .addCase(getCategories.fulfilled,(state:IApp,action:PayloadAction<ICategoriesPaypload>)=>{
//         state.categories = action.payload.data;
//     })
//     .addCase(getColors.fulfilled,(state:IApp,action:PayloadAction<ICategoriesPaypload>)=>{
//         state.colors = action.payload.data;
//     })
//     .addCase(apiCompareProducts.pending,(state:IApp,action:PayloadAction<ICategoriesPaypload>)=>{
//         state.isLoading = true;
//     })
//     .addCase(apiCompareProducts.fulfilled,(state:IApp,action:PayloadAction<any>)=>{
//         let array:string[] = [...state.compare_products];
//         if(array.includes(action.payload)){
//             array = array.filter(function(item) {
//                 return item !== action.payload
//             })
//         }else{
//             array.push(action.payload)
//         }
//         state.compare_products = array;
//         state.isLoading = false
//     })
// },