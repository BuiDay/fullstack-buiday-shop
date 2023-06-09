import {combineReducers} from 'redux'

import authReducer from '../features/auth/authSilce'
import appReducer from '../features/app/appSilce'
import productsReducer from '../features/products/productsSilce'
import userReducer from '../features/user/userSilce'
import loadingReducer from '../features/loading/loadingSilce'

import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist"
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
}

const authConfig = {
    ...commonConfig,
    key:'auth',
    whitelist:['isLoggedIn','token']
}

const appConfig = {
    ...commonConfig,
    key:'app',
    whitelist:['compare_products']
}

//passedStorage?: AsyncStorage | WebStorage
const rootReducer= combineReducers({
    auth:persistReducer<any, any>(authConfig,authReducer),
    app:persistReducer<any, any>(appConfig,appReducer),
    // auth:authReducer,
    // app:appReducer,
    products:productsReducer,
    user:userReducer,
    isLoading:loadingReducer
})

export default rootReducer
