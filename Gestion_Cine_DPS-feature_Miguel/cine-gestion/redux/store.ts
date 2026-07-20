import { configureStore } from "@reduxjs/toolkit";

import salaReducer from "./slices/SalaSlice";
import peliculasReducer from "./slices/peliculasSlice";

export const store = configureStore({

    reducer: {

        sala: salaReducer,
        peliculas: peliculasReducer,

    }

});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;