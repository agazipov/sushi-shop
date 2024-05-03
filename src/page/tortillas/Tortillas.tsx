import DishesList from "../../component/dishesList/DishesList";
import { tortillas } from "../../data/menu";

export default function Tortillas() {
    return (
        <DishesList dishes={tortillas} />
    )
}