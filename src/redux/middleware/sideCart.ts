import { RootState } from "../index";
import { Middleware, isAction } from "redux";

//** Мидлварена для обновления сторейджа при манипуляции с корзиной (в ТС нужна проверка экшена isAction) */
export const sideCart: Middleware<{}, RootState> = (store) => (next) => (action) => {
    if (isAction(action)) {
        if (action.type === "cart/addCart" || action.type === "cart/delCart") {
            localStorage.setItem("cart", JSON.stringify(store.getState().cart)); 
        }
        if (action.type === "cart/clearCart") {
            localStorage.clear();
        }
    }
    
    return next(action);
};