import { IDish } from "../../types/types";
import { Dish } from "../dish/Dish";

import "./DishesList.css";

interface IDishesList {
    dishes: IDish[],
}

export default function DishesList({dishes}: IDishesList) {
    return (
        <section className="dishesList container">
            {dishes.map((dish, index) => {
                return (
                    <Dish dish={dish} key={index}/>
                )
            })}
        </section>
    )
}