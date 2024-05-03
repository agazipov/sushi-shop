import DishesList from "../../component/dishesList/DishesList";
import { bakedRolls } from "../../data/menu";

export default function BakedRolls() {
    return (
        <DishesList dishes={bakedRolls} />
    )
}