import { Provider } from "react-redux";
import { store } from './index';
import { cartActions } from "./features/cart/cart";

interface IChildren {
    children: React.ReactNode
}

export function StoreProvider({children}: IChildren) { 
    //** функция проверяет наличие в сторейдже информации о покупках*/
    const getCartFromLocalStorage = () => {
        try {
            const persistedState = localStorage.getItem('cart');
            if (persistedState)
                return JSON.parse(persistedState);
        }
        catch (e) {
            console.log(e);
        }
    }
    
    const cart = getCartFromLocalStorage();
    
    if (cart) {
        store.dispatch(cartActions.hydration(cart));
    }

    return <Provider store={store}>{children}</Provider>
}