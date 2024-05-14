import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import { FormData, ICart } from "../../types/types";
import { sendOrderTG } from "../../services/api";
import { parsedOderForString } from "../../data/oredrMapper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/features/cart/cart";

import './FormOrder.css';

interface IFormOrder {
    cart: ICart
}

export default function FormOrder({ cart }: IFormOrder) {
    const { register, handleSubmit, } = useForm<FormData>({
        defaultValues: {
            delivery: false,
            street: '',
            house: 0,
            apartment: 0
        }
    });
    const navigate = useNavigate();
    const [viewDelivery, setViewDelivery] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = handleSubmit((data) => {
        const formedOrder = parsedOderForString(data, cart);
        try {
            sendOrderTG(formedOrder)
            .then((response) => {
                console.log(response);
                navigate('/order/success');
                dispatch(cartActions.clearCart())
            })
        } catch (error) {
            console.log('error', error);
        }
    });

    return (
        <Form onSubmit={onSubmit} className="form__my-style">
            <Form.Label >Контактная информация</Form.Label>

            <InputGroup className="mb-3">
                <Form.Control placeholder="Имя" {...register("name", { required: true })} />
                <Form.Control placeholder="Телефон" {...register("phone", { required: true })} />
            </InputGroup>

            <Form.Label >Доставка</Form.Label>

            <Form.Group className="mb-3">
                <Form.Check
                    inline
                    type="radio"
                    label="1"
                >
                    <Form.Check.Input
                        checked={!viewDelivery}
                        type="radio"
                        {...register("delivery")}
                        value='false'
                        onClick={() => setViewDelivery(false)}
                    />
                    <Form.Check.Label>Самовывоз</Form.Check.Label>
                </Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    label="2"
                >
                    <Form.Check.Input
                        type="radio"
                        {...register("delivery")}
                        value='true'
                        onClick={() => setViewDelivery(true)}
                    />
                    <Form.Check.Label>Доставка</Form.Check.Label>
                </Form.Check>
            </Form.Group>

            {viewDelivery &&
                <InputGroup className="mb-3">
                    <Form.Control className="formOrder__imput_mod" placeholder="Улица" {...register("street", { required: true })} />
                    <Form.Control placeholder="Дом" {...register("house", { required: true })} />
                    <Form.Control placeholder="Квартира" {...register("apartment", { required: true })} />
                </InputGroup>
            }

            <Form.Group className="mb-3" >
                <Form.Label>Комьентарий к заказу</Form.Label>
                <Form.Control as="textarea" rows={3} {...register("comment")} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Заказать
            </Button>
        </Form>
    )
}