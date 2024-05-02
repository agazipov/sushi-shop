import { IDish } from "../../types/types";
import "./Dish.css";

interface IDishComponent {
    dish: IDish
}

export function Dish({ dish }: IDishComponent) {
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
                {dish.price_for_mid && <div>Цена за 4 кусочка: {dish.price_for_mid}₽</div>}
                {dish.price_for_large && <div>Цена за 8 кусочков: {dish.price_for_large}₽</div>}
            </div>
            {/* <div>{dish.name}</div> */}
        </div>
    )
}