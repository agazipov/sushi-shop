import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import { Outlet } from "react-router-dom";
import Navigation from "../../component/navigation/Navigation";
import React from "react";
import Background from "../../component/background/Background";

export default function Layer() {
    return (
        <React.Fragment>
            <Background />
            <Header />
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </React.Fragment>
    );
}