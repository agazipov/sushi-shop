import DishesList from "../../component/dishesList/DishesList";
import { friedRolls } from "../../data/menu";

export default function FriedRolls() {
    return (
        <DishesList dishes={friedRolls} />
    )
}