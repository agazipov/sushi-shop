
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { selectCart } from '../../redux/features/cart/cart';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalCart from '../modalCart/ModalCart';

import './Cart.css';

export default function Cart() {
    const [show, setShow] = useState(false);
    const cart = useSelector((state: RootState) => selectCart(state));
    const handleShow = () => setShow(true);

    return (
        <div className="cart">
            <span>Кол-во: {cart.countDishes}</span>
            <span>Цена: {cart.price}</span>
            <Button variant="warning" size='sm' onClick={handleShow}>
                Корзина
            </Button>
            {createPortal(
                <ModalCart show={show} setShow={setShow} />,
                document.getElementById('modalContainer')!
            )}
        </div>
    )
}