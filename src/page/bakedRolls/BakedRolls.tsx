import DishesList from "../../component/dishesList/DishesList";
import bakedRolls from "../../data/menu/bakedRolls.json";

export default function BakedRolls() {
    return (
        <DishesList dishes={bakedRolls} />
    )
}