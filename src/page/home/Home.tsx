import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import HomeMain from "../../component/homeMain/HomeMain";

import "./Home.css"

export default function Home() {
    return (
        <div className="body">
            <Header/>
            <HomeMain/>
            <Footer/>
        </div>
    )
}