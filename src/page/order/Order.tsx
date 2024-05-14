import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { selectCart } from "../../redux/features/cart/cart";

import "./Order.css";
import OrderList from "../../component/orderList/OrderList";
import FormOrder from "../../component/formOrder/FormOder";

export default function Order() {
    const cart = useSelector((state: RootState) => selectCart(state));

    if (cart.buy.length === 0) {
        return (
            <div className="order__not container">У вас пока нет заказов</div>
        )
    }

    return (
        <section className="order container">
            <FormOrder cart={cart}/>
            <OrderList cart={cart} />
        </section>
    )
}