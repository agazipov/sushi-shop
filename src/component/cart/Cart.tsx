import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { selectCart } from '../../redux/features/cart/cart';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import ModalCart from '../modalCart/ModalCart';

import './Cart.css';

export default function Cart() {
    const [show, setShow] = useState(false);
    const cart = useSelector((state: RootState) => selectCart(state));
    const handleShow = () => setShow(true);

    return (
        <div className="cart">
            <button onClick={handleShow}>
                <svg width="60px" height="60px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#444" d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4z"></path>
                </svg>
                <div className='cart__info'>
                    <span>Кол-во: {cart.countDishes}</span>
                    <span>Цена: {cart.price}</span>
                </div>
            </button>
            {/* <Button variant="warning" size='sm' onClick={handleShow}>
                Корзина
            </Button> */}
            {createPortal(
                <ModalCart show={show} setShow={setShow} />,
                document.getElementById('modalContainer')!
            )}
        </div>
    )
}