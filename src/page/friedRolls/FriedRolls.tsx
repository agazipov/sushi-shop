import DishesList from "../../component/dishesList/DishesList";
import friedRolls from "../../data/menu/friedRolls.json";

export default function FriedRolls() {
    return (
        <DishesList dishes={friedRolls} />
    )
}