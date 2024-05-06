import { ICart } from "../../types/types";
import { Dish } from "../dish/Dish";

interface IOrderList {
    cart: ICart
}

export default function OrderList({cart}: IOrderList) {
    return (
        <div>
            <h3>Корзина: {cart.countDishes} блюд за {cart.price}₽</h3>
            <div>
                {cart.buy.map((dish, index) => {
                    return (
                        <Dish key={dish.id} dish={dish} viewVariant="custom" />
                    )
                })}
            </div>
        </div>
    )
}