import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/features/cart/cart';
import { RootState } from '../../redux';

interface IModalCart {
    show: boolean,
    setShow: (e: boolean) => void,
}

export default function ModalCart({ show, setShow }: IModalCart) {
    const cart = useSelector((state: RootState) => selectCart(state));

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Корзина {cart.countDishes} блюд за {cart.price}₽</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {cart.buy.map((dish) => {
                    return (
                        <li key={dish.id}>
                            <div>{dish.name}</div>
                            {dish.countByMid !== 0 && <div>Маленкая порция: {dish.countByMid}</div>}
                            {dish.countByLarge !== 0 && <div>Большая порция: {dish.countByLarge}</div>}
                        </li>
                    )
                })}
                </ol>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}