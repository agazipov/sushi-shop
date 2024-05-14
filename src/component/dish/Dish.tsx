import { useDispatch } from "react-redux";
import { IDish } from "../../types/types";
import { cartActions, selectDishAmount } from "../../redux/features/cart/cart";
import { Button, ButtonGroup } from "react-bootstrap";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";
import { useState } from "react";

import "./Dish.css";

interface IDishComponent {
    dish: IDish,
    viewVariant?: 'default' | 'custom'
}

export function Dish({ dish, viewVariant = 'default' }: IDishComponent) {
    const [selectDish, setSelectDish] = useState<IDish>(() => { return { ...dish, select: 'large' } });

    const handleSize = (value: 'mid' | 'large') => {
        setSelectDish(prev => { return { ...prev, select: value } })
    };

    const dispath = useDispatch();

    const count = useSelector((state: RootState) => {
        return selectDishAmount(state, dish);
    });

    return (
        <div className={`dish ${viewVariant}`}>
            <div className="dish__header">
                <h5 className="dish__title">{dish.name}</h5>
                <div className="dish__wrapper">
                    <div className="dish__img">
                        <img
                            height={100}
                            width={100}
                            src={`${process.env.PUBLIC_URL}/img_dishes/${dish.img}`}
                            alt={dish.name}
                        />
                    </div>
                    <div className="dish__desc">
                        <p>{dish.compound}</p>
                    </div>
                </div>
            </div>
            <div className={`dish__info dish__info_${viewVariant}`}>
                <div className="dish__info-wrapper">
                    {dish.price_for_mid &&
                        <div
                            className={`dish__size ${selectDish.select === 'mid' ? 'dish__size_activ' : ''}`}
                            onClick={() => handleSize('mid')}
                        >
                            <div className="dish__price">{dish.price_for_mid}₽ за 4 шт: </div>
                            <div className='dish__count'>{count ? count.countByMid : 0}</div>
                        </div>
                    }
                    {dish.price_for_large &&
                        <div
                            className={`dish__size ${selectDish.select === 'large' ? 'dish__size_activ' : ''}`}
                            onClick={() => handleSize('large')}
                        >
                            <div className="dish__price">{dish.price_for_large}₽ за 8 шт: </div>
                            <div className='dish__count'>{count ? count.countByLarge : 0}</div>
                        </div>
                    }
                </div>
                <ButtonGroup>
                    <Button variant="dark" onClick={() => dispath(cartActions.addCart(selectDish))}>+</Button>
                    <Button
                        variant="dark" onClick={() => dispath(cartActions.delCart(selectDish))}
                        disabled={
                            (selectDish.select === 'mid' && (count ? count.countByMid! === 0 : true))
                            ||
                            (selectDish.select === 'large' && (count ? count.countByLarge! === 0 : true))
                        }
                    >-</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}