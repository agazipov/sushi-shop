import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../index';

const cartSlice = createSlice({
    name: 'cart',
    initialState: 0,
    reducers: {
        addCart: (state, { payload, }: PayloadAction) => {

        }
    }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;