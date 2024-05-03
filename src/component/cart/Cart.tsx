
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { selectCart } from '../../redux/features/cart/cart';

import './Cart.css';

export default function Cart() {
    const cart = useSelector((state: RootState) => selectCart(state));

    return (
        <div className="cart">
            <span>Кол-во: {cart.countDishes}</span>
            <span>Цена: {cart.price}</span>
        </div>
    )
}