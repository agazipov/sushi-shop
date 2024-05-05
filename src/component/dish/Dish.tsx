import { useDispatch } from "react-redux";
import { IDish } from "../../types/types";
import { cartActions, selectDishAmount } from "../../redux/features/cart/cart";
import { Button, ButtonGroup } from "react-bootstrap";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";
import { useState } from "react";

import "./Dish.css";

interface IDishComponent {
    dish: IDish
}

export function Dish({ dish }: IDishComponent) {
    const [selectDish, setSelectDish] = useState<IDish>(() => { return { ...dish, select: 'large' } });

    const handleSize = (value: 'mid' | 'large') => {
        setSelectDish(prev => { return { ...prev, select: value } })
    };

    const dispath = useDispatch();

    const count = useSelector((state: RootState) => {
        return selectDishAmount(state, dish);
    });   

    const addToCart = () => dispath(cartActions.addCart(selectDish));
    const delToCart = () => dispath(cartActions.delCart(selectDish));

    return (
        <div className="dish">
            <div className="dish__wrapper">
                <div className="dish__img">
                    <img
                        height={1000}
                        width={1000}
                        src={`${process.env.PUBLIC_URL}/img_dishes/${dish.img}`}
                        alt={dish.name}
                    />
                </div>
            </div>
            <div>
                <h5>{dish.name}</h5>
                {dish.price_for_mid &&
                    <div
                        className={`dish__size ${selectDish.select === 'mid' ? 'dish__size_activ' : ''}`}
                        onClick={() => handleSize('mid')}
                    >
                        <span>Цена за 4 кусочка: {dish.price_for_mid}₽</span>
                        <div className="dish__count">{count ? count.countByMid : 0}</div>
                    </div>
                }
                {dish.price_for_large &&
                    <div
                        className={`dish__size ${selectDish.select === 'large' ? 'dish__size_activ' : ''}`}
                        onClick={() => handleSize('large')}
                    >
                        <span>Цена за 8 кусочков: {dish.price_for_large}₽</span>
                        <div className="dish__count">{count ? count.countByLarge : 0}</div>
                    </div>
                }
            </div>
            <ButtonGroup>
                <Button variant="dark" onClick={addToCart}>+</Button>
                <Button
                    variant="dark" onClick={delToCart}
                    disabled={
                        (selectDish.select === 'mid' && (count ? count.countByMid! === 0 : true)) 
                        || 
                        (selectDish.select === 'large' && (count ? count.countByLarge! === 0 : true))
                    }
                >-</Button>
            </ButtonGroup>
        </div>
    )
}