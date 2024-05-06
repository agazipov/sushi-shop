import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";

import './FormOrder.css'

type FormData = {
    name: string
    phone: string
    delivery: boolean
    street: string
    house: number
    apartment: number
    comment: string
}

export default function FormOrder() {
    const { register, handleSubmit, } = useForm<FormData>({
        defaultValues: {
            delivery: true,
            street: '',
            house: 0,
            apartment: 0
        }
    });

    const [viewDelivery, setViewDelivery] = useState(false);

    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <Form onSubmit={onSubmit}>
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
                <Form.Control as="textarea" rows={3} {...register("comment")}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Заказать
            </Button>
        </Form>
    )
}