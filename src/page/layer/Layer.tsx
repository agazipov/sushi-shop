import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import { Outlet } from "react-router-dom";
import Navigation from "../../component/navigation/Navigation";

export default function Layer() {
    return (
        <div id="detail">
            <Header />
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}