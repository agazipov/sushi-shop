import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../index';
import { ICart, IDish } from '../../../types/types';

const initialState: ICart = {
    price: 0,
    countDishes: 0,
    buy: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, { payload }: PayloadAction<IDish>) => { 
            let price = 0;

            if (payload.select === 'mid') {
                price = payload.price_for_mid || 0;
            } else {
                price = payload.price_for_large || 0;
            }

            state.price = state.price + price;

            if (state.buy.some((dish) => dish.id === payload.id)) {             
                state.buy = state.buy.map((dish) => {
                    if (dish.id === payload.id) {
                        dish.count = dish.count! + 1;
                    }
                    return dish;
                })
                state.countDishes = state.countDishes + 1;
                return;
            }

            state.buy.push({...payload, count: 1});
            state.countDishes = state.countDishes + 1;
        },
        delCart: (state, {payload }: PayloadAction<IDish>) => {
            let price = 0;
            
            if (payload.select === 'mid') {
                price = payload.price_for_mid || 0;
            } else {
                price = payload.price_for_large || 0;
            }

            const index = state.buy.findIndex((dish) => dish.id === payload.id);

            if (index !== -1) {
                if (state.buy[index].count !== 1) {
                    state.buy[index].count = state.buy[index].count! - 1;
                    state.price = state.price - price;
                    state.countDishes = state.countDishes - 1;
                    return;
                }
                
                state.buy = state.buy.filter(dish => dish.id !== payload.id);
                state.price = state.price - price;
                state.countDishes = state.countDishes - 1;
            }
        },
        clearCart: () => initialState,
    }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export const selectDishAmount = (state: RootState, { id }: IDish) =>
selectCart(state).buy.find(dish => dish.id === id) || 0;