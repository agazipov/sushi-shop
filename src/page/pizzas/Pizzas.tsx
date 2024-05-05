import DishesList from "../../component/dishesList/DishesList";
import pizzas from "../../data/menu/pizzas.json";

export default function Pizzas() {
    return (
        <DishesList dishes={pizzas} />
    )
}