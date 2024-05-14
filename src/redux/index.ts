import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart/cart";
import { sideCart } from "./middleware/sideCart";

const rootReducer = combineReducers({ cart: cartReducer, })

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sideCart),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch