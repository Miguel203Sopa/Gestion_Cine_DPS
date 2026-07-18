import { configureStore } from "@reduxjs/toolkit";

import salaReducer from './slice/SalaSlice'


export const store = configureStore({

    reducer:{
        sala: salaReducer
    }

});

export type RootState = ReturnType<
    typeof store.getState
>;

export type AppDispatch = typeof store.dispatch;