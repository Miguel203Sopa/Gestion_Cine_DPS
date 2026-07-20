import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer
} from "redux-persist";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";


import peliculasReducer from "@/redux/slices/peliculasSlice";
import salasReducer from "@/redux/slices/salasSlice";
import reservasReducer from "@/redux/slices/reservasSlice";
import funcionesReducer from "@/redux/slices/funcionesSlice";

// Storage vacío para cuando Next.js está en servidor
const createNoopStorage = () => {

    return {

        getItem() {
            return Promise.resolve(null);
        },

        setItem(value: string) {
            return Promise.resolve(value);
        },

        removeItem() {
            return Promise.resolve();
        },

    };

};


// Usa localStorage solamente en el navegador
const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();



const persistConfig = {

    key: "root",

    storage,

};



const rootReducer = combineReducers({

    peliculas: peliculasReducer,

    salas: salasReducer,

    reservas: reservasReducer,

    funciones: funcionesReducer

});



const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);



export const store = configureStore({

    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({

            serializableCheck: false

        })

});



export const persistor = persistStore(store);


// Tipos para Redux
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;