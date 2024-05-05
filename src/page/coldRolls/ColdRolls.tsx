import DishesList from "../../component/dishesList/DishesList";
import coldRolls from "../../data/menu/coldRolls.json";

import "./ColdRolls.css";

export default function RoldRolls() {
    return (
        <DishesList dishes={coldRolls} />
    )
}