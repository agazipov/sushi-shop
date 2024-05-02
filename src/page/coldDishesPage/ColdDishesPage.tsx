import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import DishesList from "../../component/dishesList/DishesList";
import { coldRolls } from "../../lib/menu";

import "./ColdDishesPage.css";

export default function ColdDishesPage() {
    return (
        <div className="body">
            <Header/>
            <DishesList dishes={coldRolls}/>
            <Footer/>
        </div>
    )
}