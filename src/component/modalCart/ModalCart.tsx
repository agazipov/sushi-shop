import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/features/cart/cart';
import { RootState } from '../../redux';
import { Dish } from '../dish/Dish';
import { useNavigate } from "react-router-dom";

import './ModalCart.css';

interface IModalCart {
    show: boolean,
    setShow: (e: boolean) => void,
}

export default function ModalCart({ show, setShow }: IModalCart) {
    const cart = useSelector((state: RootState) => selectCart(state));
    const navigate = useNavigate();

    const handleCheckOut = () => {
        setShow(false);
        cart.buy.length !== 0 && navigate('/order');
    };

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Корзина: {cart.countDishes} блюд за {cart.price}₽</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cart.buy.length === 0 
                    ?
                    <div>Корзина пуста</div>
                    :
                    <ol className='modal__ol'>
                        {cart.buy.map((dish) => {
                            return (
                                <li key={dish.id}>
                                    <Dish dish={dish} viewVariant='custom' />
                                </li>
                            )
                        })}
                    </ol>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={handleCheckOut} disabled={cart.buy.length === 0}>
                    Оформить заказ
                </Button>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    )
}