import DishesList from "../../component/dishesList/DishesList";
import { beverages } from "../../data/menu";

export default function Beverages() {
    return (
        <DishesList dishes={beverages} />
    )
}