import DishesList from "../../component/dishesList/DishesList";
import extras from "../../data/menu/extras.json";

export default function Extras() {
    return (
        <DishesList dishes={extras} />
    )
}