import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../index';
import { ICart, IDish } from '../../../types/types';
import { addBuyForCart, delBuyForCart } from './libs';

const initialState: ICart = {
    price: 0,
    countDishes: 0,
    buy: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        hydration: (state, { payload }: PayloadAction<ICart>) => { 
            return payload;
        },
        addCart: (state, { payload }: PayloadAction<IDish>) => { //добавить счетчик общего прайса в функцию**
            // общая цена в зависимости от порции
            const checkSize = payload.select === 'mid';
            state.price = checkSize ? state.price + payload.price_for_mid! : state.price + payload.price_for_large!;

            addBuyForCart(state, payload, checkSize);
            localStorage.setItem("cart", JSON.stringify(state));
        },
        delCart: (state, { payload }: PayloadAction<IDish>) => {
            // общая цена в зависимости от порции
            const checkSize = payload.select === 'mid';
            
            delBuyForCart(state, payload, checkSize);
            localStorage.setItem("cart", JSON.stringify(state));
        },
        clearCart: () => {
            localStorage.clear();
            return initialState;
        },
    }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export const selectDishAmount = (state: RootState, { id }: IDish) =>
    selectCart(state).buy.find(dish => dish.id === id) || null;