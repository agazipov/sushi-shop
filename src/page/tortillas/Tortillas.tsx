import DishesList from "../../component/dishesList/DishesList";
import tortillas from "../../data/menu/tortillas.json";

export default function Tortillas() {
    return (
        <DishesList dishes={tortillas} />
    )
}