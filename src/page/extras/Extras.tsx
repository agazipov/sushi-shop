import DishesList from "../../component/dishesList/DishesList";
import { extras } from "../../data/menu";

export default function Extras() {
    return (
        <DishesList dishes={extras} />
    )
}