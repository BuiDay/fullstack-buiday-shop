import rootReducer from './reducer/rootRuducer'
import thunk from 'redux-thunk'
import {configureStore ,ThunkAction,Action} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const store = configureStore({
    // reducer: rootReducer,
    reducer:rootReducer,
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);